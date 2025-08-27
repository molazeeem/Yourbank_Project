import "./AA_MissionVision.css";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const section = (rev) => ({
  hidden: { opacity: 0, x: rev ? 24 : -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease, when: "beforeChildren", staggerChildren: 0.08 } },
});

const imgCard = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

const imgReveal = {
  hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0.001 },
  show: { clipPath: "inset(0 0 0% 0)", opacity: 1, transition: { duration: 0.6, ease } },
};

const lineGrow = (rev) => ({
  hidden: { scaleY: 0, transformOrigin: rev ? "top right" : "top left" },
  show: { scaleY: 1, transition: { duration: 0.5, ease, delay: 0.15 } },
});

const titleV = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.35, ease } } };
const paraV = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease, delay: 0.05 } } };

export default function AA_MissionVision({ AaimageSrc, Aareverse, MvTitle, Mvdes }) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div className="aa-Mv-cotainer-aa" variants={section(Aareverse)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
      <div className={`aa-Mv-section ${Aareverse ? "aa-row-reversed" : "aa-flex-row"}`}>

        <motion.div
          className={`aa-image-mission-vision ${Aareverse ? "row-image-reversed offset-up" : "flex-row offset-down"}`}
          variants={imgCard}
          whileHover={prefersReduced ? {} : { y: -4 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div className="aa-image-wrapper" variants={imgReveal}>
            <img className="aa-back-image" src="assets/images/AbstractDesign/abstract-dots.webp" alt="" />
            <motion.img
              className="aa-image-mv"
              src={AaimageSrc}
              alt="mission-image"
              animate={prefersReduced ? {} : { y: [0, -6, 0] }}
              transition={prefersReduced ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {Aareverse ? (
            <motion.span className="aa-left aa-line-down" variants={lineGrow(true)} />
          ) : (
            <motion.span className="aa-right aa-line-down" variants={lineGrow(false)} />
          )}
        </motion.div>

        <div className={`AA-des-MV ${Aareverse ? "aa-padding-right" : "aa-padding-left"}`}>
          <motion.h3 className="LexendMedium" variants={titleV}>{MvTitle}</motion.h3>
          <motion.p className="LexendLight" variants={paraV}>{Mvdes}</motion.p>
        </div>
      </div>
    </motion.div>
  );
}
