import "./homeHero.css";
import { NavLink, useLocation } from "react-router-dom";
import { exchange, currencyIcons, list } from "../../data/HomeHeroData";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const section = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
};

const stagger = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.04 },
    },
};

const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35, ease } },
};

export default function HomeHero () {
    const { pathname } = useLocation();
    const prefersReduced = useReducedMotion();

    return (
        <div
            className={`ss-homeHero white-space ${pathname === "/Bank_Project/" ? "homeHero-mt" : "hero-mt"
                } section-MarginBottom`}
        >
            <motion.div
                className="ss-descriptionDiv gpu"
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
            >
                <motion.div className="LexendLight ss-firstDiv" variants={item}>
                    <img
                        src="assets/images/Icons/Home-icons/hero-icons/check-badge.svg"
                        alt="check-badge"
                    />
                    <p>No LLC Required, No Credit Check.</p>
                </motion.div>

                <motion.div className="ss-headingContainer" variants={item}>
                    <h1 className="LexendMedium">
                        Welcome to YourBank Empowering Your <span>Financial Journey </span>
                    </h1>
                </motion.div>

                <motion.p className="LexendLight" variants={item}>
                    At YourBank, our mission is to provide comprehensive banking
                    solutions that empower individuals and businesses to achieve their
                    financial goals. We are committed to delivering personalized and
                    innovative services that prioritize our customers' needs.
                </motion.p>

                <motion.button
                    className="LexendRegular"
                    variants={item}
                    whileHover={!prefersReduced ? { y: -2 } : {}}
                    whileTap={!prefersReduced ? { scale: 0.98 } : {}}
                    transition={{ duration: 0.2 }}
                >
                    <NavLink to="/signUp">Open Account</NavLink>
                </motion.button>
            </motion.div>

            <motion.div
                className="ss-exchangeContainer gpu"
                variants={section}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="ss-exchange">
                    <p className="LexendMedium ss-title">Your Transactions</p>

                    <div className="ss-transactions">
                        <div className="ss-transactionsContainer">
                            {list.map((trans, index) => (
                                <motion.div
                                    key={index}
                                    className="ss-transaction gpu"
                                    initial={{ opacity: 0, y: 14, scale: 0.985 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.45,
                                        ease,
                                        delay: 0.08 * index,
                                    }}
                                >
                                    <div className="ss-transaction-info">
                                        <div className="ss-iconContainer">
                                            <img src={trans.icon} alt="transaction-icon" />
                                        </div>
                                        <div className="ss-transaction-info-des">
                                            <p className="LexendLight ss-transaction-info-des-title">
                                                {trans.title}
                                            </p>
                                            <p className="LexendRegular ss-transaction-info-des-name">
                                                {trans.name}
                                            </p>
                                        </div>
                                    </div>
                                    <span className="LexendMedium">{trans.amount}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <motion.div
                        className="ss-abstractImg gpu"
                        animate={
                            prefersReduced
                                ? {}
                                : { y: [0, -6, 0] }
                        }
                        transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                    >
                        <div className="ss-abstractImg-container">
                            <img
                                src="assets/images/AbstractDesign/AbstractArrows.webp"
                                alt="abstract-img"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        className="ss-income gpu"
                        initial={{ opacity: 0, y: -8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        animate={
                            prefersReduced
                                ? {}
                                : { y: [-1, 0, -1] }
                        }
                        transition={{
                            duration: 3.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatType: "mirror",
                        }}
                    >
                        <div className="ss-iconContainer">
                            <img
                                src="assets/images/Icons/Home-icons/hero-icons/plus.svg"
                                alt="plus-icon"
                            />
                        </div>
                        <div className="ss-income-info">
                            <p className="LexendRegular ss-income-info-amount">+ $5000,00</p>
                            <p className="LexendLight ss-p">Monthly Income</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="ss-moneyExchange"
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <p className="LexendMedium ss-title">Money Exchange</p>

                        <motion.div className="ss-exchangeTable" variants={item}>
                            {exchange.map((c, index) => (
                                <div className="ss-exchangeTable-item" key={index}>
                                    <div
                                        className={`ss-exchangeTable-item-info ${index === 0 ? "ss-first" : ""
                                            }`}
                                    >
                                        <div className="ss-contry">
                                            <img
                                                src={c.icon}
                                                alt={`${c.countryName} flag`}
                                                className="ss-flag"
                                            />
                                            <span className="LexendRegular ss-contryName">
                                                {c.countryName}
                                            </span>
                                        </div>
                                        <p className="LexendLight ss-cruncy">{c.curncy}</p>
                                    </div>
                                    <p
                                        className={`LexendMedium ss-amount ${index === 0 ? " ss-first" : ""
                                            }`}
                                    >
                                        {c.amount}
                                    </p>
                                </div>
                            ))}
                        </motion.div>

                        <motion.button
                            className="LexendRegular ss-exchangeButton"
                            whileHover={!prefersReduced ? { y: -1 } : {}}
                            whileTap={!prefersReduced ? { scale: 0.985 } : {}}
                            transition={{ duration: 0.2 }}
                        >
                            Exchange
                        </motion.button>
                    </motion.div>
                </div>

                <motion.div
                    className="ss-supportedCurrencyContainer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, ease }}
                >
                    <div className="ss-supportedCurrency">
                        <p className="LexendRegular ss-supportedCurrencyTitle">
                            Supported Currency
                        </p>
                        <div className="ss-currContainer">
                            {currencyIcons.map((curr, index) => (
                                <motion.div
                                    key={index}
                                    className="ss-currIconContainer gpu"
                                    initial={{ opacity: 0, y: 8 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, ease, delay: 0.04 * index }}
                                    whileHover={!prefersReduced ? { scale: 1.04 } : {}}
                                >
                                    <img
                                        src={curr.icon}
                                        alt={`icon-${index}`}
                                        className="ss-currIconContainerIcon"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};
