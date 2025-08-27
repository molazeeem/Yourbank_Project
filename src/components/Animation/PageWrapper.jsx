import { motion } from "framer-motion";

const variants = {
    fade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 }
    },
    slide: {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -24 }
    },
    zoom: {
        initial: { opacity: 0, scale: 0.98 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0.98 }
    }
};

export default function PageWrapper({ children, variant = "slide" }) {
    return (
        <motion.div
            variants={variants[variant]}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ minHeight: "60vh", willChange: "transform, opacity" }}
        >
            {children}
        </motion.div>
    );
}
