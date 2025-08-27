
import { pressData } from "../../data/pressData";
import "./PressReleases.css";
import SectionTitle from "../SectionTitle/SectionTitle";
import React, { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const sectionV = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease, when: "beforeChildren", staggerChildren: 0.08, delayChildren: 0.06 },
    },
};

const cardV = {
    hidden: { opacity: 0, y: 16, scale: 0.985 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease } },
};

const imgRevealV = {
    hidden: { clipPath: "inset(0 0 100% 0)", scale: 1.02, opacity: 0.001 },
    show: { clipPath: "inset(0 0 0% 0)", scale: 1, opacity: 1, transition: { duration: 0.55, ease } },
};

export default function PressReleases() {
    const [pressCards, setCards] = useState([]);
    const prefersReduced = useReducedMotion();

    useEffect(() => {
        const storageData = localStorage.getItem("PYcards");
        if (storageData) {
            setCards(JSON.parse(storageData));
        } else {
            localStorage.setItem("PYcards", JSON.stringify(pressData));
            setCards(pressData);
        }
    }, []);

    return (
        <motion.section
            className="WN-press-releases white-space section-MarginBottom"
            variants={sectionV}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            <SectionTitle
                widthtitle={1296}
                titlegreen="Press Releases"
                paragraph="Stay updated with the latest happenings and exciting developments at YourBank through our press releases."
            />

            <motion.div
                className="WN-press-cards"
                variants={{ show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } } }}
            >
                {pressCards.map((item, idx) => (
                    <motion.div
                        key={item.id ?? idx}
                        className="WN-press-card"
                        variants={cardV}
                        whileHover={prefersReduced ? {} : { y: -4, scale: 1.01 }}
                        transition={{ duration: 0.22 }}
                    >
                        <motion.img
                            src={item.image}
                            alt="card-img"
                            variants={imgRevealV}
                            animate={prefersReduced ? {} : { y: [0, -3, 0] }}
                            transition={prefersReduced ? {} : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        />

                        <motion.h4 className="pressCardTitle LexendRegular" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, ease }}>
                            {item.title}
                        </motion.h4>

                        <motion.div
                            className="presssCardDateAndLocation LexendLight"
                            initial={{ opacity: 0, y: 8 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.3, ease, delay: 0.04 }}
                        >
                            <p className="pressCardLocation">{item.location}</p>
                            <p className="pressCardDate">{item.date}</p>
                        </motion.div>

                        <motion.p
                            className="pressCardDescribe LexendLight"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.35, ease, delay: 0.06 }}
                        >
                            {item.decribe}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </motion.section>
    );
}
