import React, { useState } from "react";
import  SectionTitle from "../SectionTitle/SectionTitle";
import IconShape from "../iconShape/IconShape";
import "./ProductsSection.css";
import { productsForBusinesses, productsForIndividuals } from "../../data/OurProducts";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.06 },
  },
};

const card = {
  hidden: { opacity: 0, y: 14, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease } },
  exit: { opacity: 0, y: -12, scale: 0.985, transition: { duration: 0.28, ease } },
};

export default function ProductsSection() {
  const [userType, setUserType] = useState("Individuals");
  const prefersReduced = useReducedMotion();
  const data = userType === "Individuals" ? productsForIndividuals : productsForBusinesses;

  const handleUserTypeChange = (type) => setUserType(type);

  return (
    <div className="rh-products-section white-space section-MarginBottom">
      <SectionTitle
        titlewhite="Our"
        titlegreen=" Products"
        filter={true}
        paragraph="Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations."
        reverse={false}
        userType={userType}
        handleUserTypeChange={handleUserTypeChange}
      />

      <motion.div
        className="rh-products-cards"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={userType} 
            className="rh-products-cards" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            style={{ width: "100%" }}
          >
            {data.map((product, i) => (
              <motion.div
                key={product.title}
                className="rh-product-card gpu"
                variants={card}
                initial="hidden"
                animate="show"
                exit="exit"
                whileTap={prefersReduced ? {} : { scale: 0.99 }}
                transition={{ duration: 0.25 }}
              >
                <motion.div
                  initial={prefersReduced ? {} : { opacity: 0, scale: 0.95 }}
                  animate={prefersReduced ? {} : { opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease, delay: 0.05 * i }}
                >
                  <IconShape icon={product.icon} size={80} className="rh-icon-center" />
                </motion.div>

                <motion.h2
                  className="LexendRegular"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease, delay: 0.06 * i } }}
                >
                  {product.title}
                </motion.h2>

                <motion.p
                  className="LexendLight"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.3, ease, delay: 0.08 * i } }}
                >
                  {product.description}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
