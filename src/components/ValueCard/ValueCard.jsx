import "./ValueCard.css";
import { OurValuesData } from "../../data/OurValuesData";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
};

const item = {
    hidden: { opacity: 0, y: 14, scale: 0.985 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease } },
};

export default function ValueCard() {
    const [valueCards, setCards] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("OVcards");
        if (stored) {
            setCards(JSON.parse(stored));
        } else {
            localStorage.setItem("OVcards", JSON.stringify(OurValuesData));
            setCards(OurValuesData);
        }
    }, []);

    return (
        <motion.div
            className="rh-value-Container gpu"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
        >
            {valueCards.map((itemData, index) => (
                <motion.div
                    key={index}
                    className="rh-ValueCard"
                    variants={item}
                    whileHover={{ y: -2 }}           // micro-lift (transform only)
                    transition={{ duration: 0.2 }}
                >
                    <h3 className="LexendMedium rh-h3">{itemData.title}</h3>
                    <p className="LexendLight rh-p">{itemData.desc}</p>
                </motion.div>
            ))}
        </motion.div>
    );
}

