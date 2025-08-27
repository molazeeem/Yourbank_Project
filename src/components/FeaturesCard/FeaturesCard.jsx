import "./FeaturesCard.css";
import { FeaturesData } from "../../data/FeaturesData";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const card = {
  hidden: { opacity: 0, y: 12, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease } },
};

export default function FeaturesCard({ group }) {
  const prefersReduced = useReducedMotion();
  const cardGroup = 4;
  const start = group * cardGroup;
  const end = start + cardGroup;
  const visibleCards = FeaturesData.slice(start, end);

  return (
    <motion.div
      className="aa-container-feature gpu"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {visibleCards.map((e, index) => (
        <motion.div
          key={e.id ?? `${group}-${index}`} // stable key
          className="aa-features-card"
          variants={card}
          whileHover={
            prefersReduced ? {} : { y: -4, scale: 1.02 }
          }
          transition={{ duration: 0.25 }}
        >
          <div className="aa-features-heading LexendRegular">
            <p>{e.aa_title}</p>
            <motion.img
              src="assets/images/Icons/features-arrow.svg"
              alt="arrow"
              initial={false}
              animate={prefersReduced ? {} : { x: [0, 2, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              style={{ willChange: "transform" }}
            />
          </div>
          <p className="aa-features-description LexendRegular">{e.aa_description}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
