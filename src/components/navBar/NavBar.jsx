import { useState, useEffect } from "react";
import "./navBar.css";
import { NavLink } from "react-router-dom";
import {
    motion,
    useReducedMotion,
    useScroll,
    useMotionValueEvent,
} from "framer-motion";

export default function NavBar() {
    const list = ["Home", "Careers", "About", "Security"];
    const LinkList = ["/", "/careers", "/about", "/security"];
    const buttonsList = ["Sign Up", "Login", "Dashboard"];
    const buttonsLinksList = ["/signup", "/login", "/dashBoard"];

    const [show, setShow] = useState(false);
    const [navShow, setNavShow] = useState(false);
    const prefersReduced = useReducedMotion();

    const { scrollY } = useScroll();
    useMotionValueEvent(scrollY, "change", (latest) => {
        setNavShow(latest > 70);
    });

    useEffect(() => {
        const onScroll = () => setNavShow(window.scrollY > 70);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleShow = () => setShow((s) => !s);

    const enterV = {
        hidden: { y: -24, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const drawerV = {
        hidden: { x: "100%" },
        show: prefersReduced
            ? { x: 0, transition: { duration: 0.2 } }
            : {
                x: 0,
                transition: { type: "spring", stiffness: 340, damping: 32 },
            },
    };

    const overlayV = {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.2 } },
    };

    return (
        <>
            <motion.div
                className="ss-overlay"
                initial="hidden"
                animate={show ? "show" : "hidden"}
                variants={overlayV}
                onClick={handleShow}
                style={{ pointerEvents: show ? "auto" : "none" }}
            />

            <motion.nav
                layout
                transition={{
                    layout: {
                        duration: 0.38,
                        ease: [0.22, 1, 0.36, 1],
                    },
                }}
                className={`${navShow ? "ss-navShow" : "white-space ss-nav"}`}
                variants={enterV}
                initial="hidden"
                animate="show"
                style={{
                    backdropFilter: navShow ? "blur(8px)" : "blur(0px)",
                    WebkitBackdropFilter: navShow ? "blur(8px)" : "blur(0px)",
                    boxShadow: navShow
                        ? "0 12px 30px rgba(0,0,0,.28)"
                        : "none",
                    border: navShow
                        ? "1px solid var(--second-color)"
                        : "1px solid transparent",
                }}
            >
                <motion.img
                    className="ss-navLogo"
                    src="assets/images/Home/logo.webp"
                    alt="nav-logo"
                    animate={
                        prefersReduced
                            ? {}
                            : {
                                scale: navShow ? 0.96 : 1,
                                opacity: navShow ? 0.96 : 1,
                            }
                    }
                    transition={{ duration: 0.25 }}
                />

                <ul className="ss-navUl">
                    {list.map((listItem, index) => (
                        <li key={index} className="ss-li">
                            <NavLink to={LinkList[index]}>
                                {({ isActive }) => (
                                    <>
                                        <span
                                            className={`LexendRegular ss-link ${isActive
                                                    ? "ss-link-active"
                                                    : ""
                                                }`}
                                        >
                                            <span className="ss-link-label">
                                                {listItem}
                                            </span>
                                        </span>
                                        {isActive && (
                                            <motion.span
                                                className="ss-active-pill"
                                                layoutId="nav-active-pill"
                                            />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="ss-buttonsDiv">
                    {buttonsList.map((button, index) => (
                        <button key={index}>
                            <NavLink
                                to={buttonsLinksList[index]}
                                className={({ isActive }) =>
                                    isActive
                                        ? "ss-button-active LexendRegular"
                                        : "LexendRegular"
                                }
                            >
                                {button}
                            </NavLink>
                        </button>
                    ))}
                </div>

                <motion.button
                    className="menu"
                    onClick={handleShow}
                    aria-label="Toggle menu"
                    whileTap={prefersReduced ? {} : { scale: 0.96 }}
                >
                    <motion.img
                        src="assets/images/Home/Button.webp"
                        alt="menu"
                        className="ss-menuIcon"
                        animate={
                            prefersReduced ? {} : { rotate: show ? 90 : 0 }
                        }
                        transition={{ duration: 0.25 }}
                    />
                </motion.button>

                <motion.div
                    className={`ss-mobile-nav ${show ? " ss-show" : ""}`}
                    initial="hidden"
                    animate={show ? "show" : "hidden"}
                    variants={drawerV}
                >
                    <button
                        className="ss-mobile-nav-iconContainer"
                        onClick={handleShow}
                        aria-label="Close menu"
                    >
                        <img
                            src="assets/images/Icons/Home-icons/hero-icons/plus.svg"
                            alt="close"
                        />
                    </button>

                    <ul className="ss-mobile-navList">
                        {list.map((listItem, index) => (
                            <li onClick={handleShow} key={index}>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "ss-link-active LexendRegular"
                                            : "LexendRegular"
                                    }
                                    to={LinkList[index]}
                                >
                                    {listItem}
                                </NavLink>
                            </li>
                        ))}
                        {buttonsList.map((button, index) => (
                            <li onClick={handleShow} key={index}>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive
                                            ? "ss-link-active LexendRegular"
                                            : "LexendRegular"
                                    }
                                    to={buttonsLinksList[index]}
                                >
                                    {button}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </motion.nav>
        </>
    );
}
