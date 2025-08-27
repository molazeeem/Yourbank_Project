import "./ProtectYou.css";
import { protectData } from "../../data/protectData";
import IconShape from "../iconShape/IconShape";
import React, { useState, useEffect } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const sectionV = {
    hidden: { opacity: 0, y: 18 },
    show: {
        opacity: 1, y: 0,
        transition: { duration: 0.45, ease, when: "beforeChildren", staggerChildren: 0.08, delayChildren: 0.06 }
    }
};

const gridV = { show: { transition: { staggerChildren: 0.08, delayChildren: 0.08 } } };

const cardV = {
    hidden: { opacity: 0, y: 16, scale: 0.985 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.35, ease } }
};

const iconV = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.35, ease, delay: 0.05 } }
};

export default function ProtectYou() {
    const [protectCards, setCards] = useState([]);
    const prefersReduced = useReducedMotion();

    useEffect(() => {
        const storageData = localStorage.getItem("PRcards");
        if (storageData) {
            setCards(JSON.parse(storageData));
        } else {
            localStorage.setItem("PRcards", JSON.stringify(protectData));
            setCards(protectData);
        }
    }, []);

    return (
        <motion.section
            className="WNprotectYou white-space ProtectYou-MarginBottom"
            variants={sectionV}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
        >
            <SectionTitle
                titlewhite="How We"
                titlegreen=" Protect You"
                paragraph="At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times"
                widthtitle={1306}
            />

            <div className="protectYouCardsContainer">
                <motion.div className="WNprotectCards" variants={gridV}>
                    {protectCards.map((item) => (
                        <motion.div
                            key={item.id}
                            className="WNprotectCard"
                            variants={cardV}
                            whileHover={prefersReduced ? {} : { y: -4, scale: 1.01 }}
                            transition={{ duration: 0.22 }}
                        >
                            <div className="protectFlex">
                                <motion.div variants={iconV}>
                                    <IconShape
                                        icon={item.icon}
                                        size={98}
                                        className="protectIcon"
                                    />
                                </motion.div>
                                <motion.h4
                                    className="protectYouCardTitle LexendRegular"
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, ease }}
                                >
                                    {item.title}
                                </motion.h4>
                            </div>

                            <motion.p
                                className="protectYouCardDesc LexendLight"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.35, ease, delay: 0.04 }}
                            >
                                {item.desc}
                            </motion.p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
