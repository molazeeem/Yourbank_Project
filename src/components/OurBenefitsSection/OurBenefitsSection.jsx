import "./OurBenefitsSection.css";
import SectionTitle  from "../SectionTitle/SectionTitle";
import { exportedBFCardData } from "../../data/OurBenefitsCard";
import BenefitsCard  from "../BenefitsCard/BenefitsCard";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const section = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

const grid = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const card = {
  hidden: { opacity: 0, y: 14, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease } },
};

export default function OurBenefitsSection() {
  return (
    <motion.div
      className="Ob-section-container white-space section-MarginBottom"
      variants={section}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <SectionTitle
        titlewhite={"Our"}
        titlegreen={" Benefits"}
        filter={false}
        widthtitle={1296}
        paragraph={
          "At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth."
        }
      />

      <motion.div
        className="OB-card-container gpu"
        variants={grid}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {exportedBFCardData.map((ele, index) => (
          <motion.div
            key={index}
            variants={card}
            whileHover={{ y: -3 }}         
            transition={{ duration: 0.2 }}
          >
            <BenefitsCard
              borderClassName={`${[1, 2].includes(index) ? "ou-border-design" : "ou-second-border-design"}`}
              sizeIco={76}
              srcIco={ele.icon}
              classNameIco={"OBC-card"}
              title={ele.title}
              paragraph={ele.paragraph}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
