import { useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import  SliderSec  from "../SliderSec/SliderSec";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function OurTestimonialsSiction() {
  const [userType, setUserType] = useState("Individuals");

  const handleUserTypeChange = (type) => {
    setUserType(type);
  };

  return (
    <motion.section
      className="white-space section-MarginBottom"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease }}
    >
      <SectionTitle
        titlewhite="Our"
        titlegreen=" Testimonials"
        filter={true}
        paragraph="Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey"
        handleUserTypeChange={handleUserTypeChange}
        userType={userType}
      />

      <SliderSec userType={userType} />
    </motion.section>
  );
}
