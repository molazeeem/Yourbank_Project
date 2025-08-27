import { HA_JobOpeningsCard_Data } from "../../data/HA_JobOpeningsCard_Data";
import "./HA_JobOpeningsCard.css";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const card = {
  hidden: { opacity: 0, y: 16, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease } },
};

const rowItem = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.28, ease } },
};

export default function HA_JobOpeningsCard  () {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="HA_JobOpeningsCardWrapper gpu"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {HA_JobOpeningsCard_Data.map((cardData, cardIndex) => (
        <motion.div
          key={cardIndex}
          className="HA_JobOpeningsCard"
          variants={card}
          whileHover={prefersReduced ? {} : { y: -3 }}
          transition={{ duration: 0.2 }}
        >
          <motion.h2 className="head LexendSemiBold" variants={rowItem}>
            {cardData.head}
          </motion.h2>

          <motion.div className="optionsContainer" variants={rowItem}>
            {cardData.options?.map((option, idx) => (
              <motion.button
                key={idx}
                className="HeadBtn LexendLight"
                whileHover={prefersReduced ? {} : { y: -2 }}
                whileTap={prefersReduced ? {} : { scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                {option}
              </motion.button>
            ))}
          </motion.div>

          <motion.h3 className="titleANDrequirementTitle LexendSemiBold" variants={rowItem}>
            About This Job
          </motion.h3>
          <motion.span className="subTitleANDrequirements LexendLight" variants={rowItem}>
            {cardData.subTitle}
          </motion.span>

          <motion.h3 className="titleANDrequirementTitle LexendSemiBold" variants={rowItem}>
            Requirements & Qualifications
          </motion.h3>

          <motion.div className="requirementsList" variants={rowItem}>
            {cardData.requirements?.map((req, idx) => (
              <motion.div key={idx} className="requirementItem" variants={rowItem}>
                <img
                  className="img"
                  src="assets/images/Icons/careers-icons/briefcase-gray.svg"
                  alt="briefcase icon"
                />
                <span className="subTitleANDrequirements LexendLight">{req}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.button
            className={`btn LexendMedium ${cardIndex === 1 ? "aa-btn-mt" : ""}`}
            whileHover={prefersReduced ? {} : { y: -2 }}
            whileTap={prefersReduced ? {} : { scale: 0.98 }}
            transition={{ duration: 0.15 }}
          >
            Apply Now
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  );
};

