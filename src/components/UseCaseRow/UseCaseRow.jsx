import "./UseCaseRow.css";
import UseCaseCard from "../UseCaseCard/UseCaseCard";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const ease = [0.22, 1, 0.36, 1];

const row = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } } };
const grid = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } } };
const card = { hidden: { opacity: 0, y: 12, scale: 0.985 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease } } };
const stat = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease } } };

function CountUp({ value, duration = 1200, delay = 0, className = "", prefersReduced }) {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.6, once: true });

  const parsed = useMemo(() => {
    const str = String(value).trim();
    const match = str.match(/^(\D*?)(-?\d+(?:[.,]\d+)?)(.*)$/);
    if (!match) return { prefix: "", num: NaN, suffix: str, decimals: 0 };
    const [, prefix, numStr, suffix] = match;
    const normalized = numStr.replace(",", ".");
    const decimals = (normalized.split(".")[1] || "").length;
    return { prefix, num: parseFloat(normalized), suffix, decimals };
  }, [value]);

  const [display, setDisplay] = useState(() => {
    if (prefersReduced || isNaN(parsed.num)) return String(value);
    return `${parsed.prefix}${(0).toFixed(parsed.decimals)}${parsed.suffix}`;
  });

  useEffect(() => {
    if (prefersReduced || isNaN(parsed.num)) return;
    if (!inView) return;

    let raf;
    let start = null;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const tick = (ts) => {
      if (start === null) start = ts;
      const elapsed = ts - start;

      if (elapsed < delay) {
        raf = requestAnimationFrame(tick);
        return;
      }

      const t = Math.min(1, (elapsed - delay) / duration);
      const eased = easeOutCubic(t);
      const current = parsed.num * eased;
      setDisplay(`${parsed.prefix}${current.toFixed(parsed.decimals)}${parsed.suffix}`);

      if (t < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, prefersReduced, parsed, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}

export default function UseCasesRow({ useCaseData, indiv, title, para, reverce }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className={`ss-useCases ${reverce ? "ss-reverce" : ""}`}
      variants={row}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div
        className="WN_UseCaseCards gpu"
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {useCaseData.map((item, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={prefersReduced ? {} : { y: -4, scale: 1.02 }}
            transition={{ duration: 0.25 }}
            style={{ width: "100%" }}
          >
            <UseCaseCard CardIcon={item.icon} CardDescription={item.description} />
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="ss-useCasesIndivs gpu"
        variants={row}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.h2 className="LexendMedium ss-useCasesIndivsTitle" variants={stat}>
          {title}
        </motion.h2>

        <motion.p className="LexendLight ss-useCasesIndivsDes" variants={stat}>
          {para}
        </motion.p>

        <motion.div
          className="ss-useCasesIndivsContainer"
          variants={grid}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {indiv.map((item, index) => (
            <motion.div
              key={index}
              className="ss-useCasesIndivsInnerContainer"
              variants={stat}
            >
              <motion.div
                className="ss-useCasesIndivsItem"
                whileHover={prefersReduced ? {} : { y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <CountUp
                  value={item.per}
                  className="LexendMedium ss-useCasesIndivsItemSpan"
                  duration={1100}
                  delay={index * 120}
                  prefersReduced={prefersReduced}
                />
                <p className="LexendLight ss-useCasesIndivsItemP">{item.title}</p>
              </motion.div>

              {index !== 2 ? <div className="ss-dashed" /> : null}
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="ss-useCasesIndivsButtonContainer" variants={stat}>
          <motion.button
            className="LexendRegular ss-useCasesIndivsButton"
            whileHover={prefersReduced ? {} : { y: -2 }}
            whileTap={prefersReduced ? {} : { scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
