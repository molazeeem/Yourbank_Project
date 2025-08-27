import { useState } from "react";
import FeaturesCard from "../FeaturesCard/FeaturesCard";
import FeaturesFilter from "../FeaturesFilter/FeaturesFilter";
import "./Featured.css";
import SectionTitle  from "../SectionTitle/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Featured() {
  const [group, setGroup] = useState(0);

  return (
    <section className="OurFeatures section-MarginBottom white-space">
      <SectionTitle
        titlewhite="Our"
        titlegreen=" Features"
        paragraph="Experience a host of powerful features at YourBank, including seamless online banking, secure transactions, and personalized financial insights, all designed to enhance your banking experience"
        widthtitle={1296}
      />

      <motion.div
        className="aa-features-container gpu"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease }}
      >
        <FeaturesFilter group={group} setGroup={setGroup} />

        <AnimatePresence mode="wait">
          <motion.div
            key={group}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.25, ease } }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.2, ease } }}
          >
            <FeaturesCard group={group} />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
