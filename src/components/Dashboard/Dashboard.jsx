import "./Dashboard.css";
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HA_FaqCard_Data } from "../../data/HA_FaqCard_Data";

const ease = [0.22, 1, 0.36, 1];

export default function Dashboard() {
    const editTitleRef = useRef(null);

    const [faqArr, setFaqArr] = useState(
        () => JSON.parse(localStorage.getItem("faqData")) || []
    );

    const [title, setTitle] = useState("");
    const [paragraph, setParagraph] = useState("");

    const [editTitle, setEditTitle] = useState("");
    const [editParagraph, setEditParagraph] = useState("");

    const [showEditForm, setShowEditForm] = useState(false);
    const [faqId, setFaqId] = useState(0);

    useEffect(() => {
        localStorage.setItem("faqData", JSON.stringify(faqArr));
    }, [faqArr]);

    useEffect(() => {
        if (showEditForm && editTitleRef.current) {
            editTitleRef.current.focus();
        }
    }, [showEditForm]);

    let nextId =
        faqArr.length > 0 ? parseInt(faqArr[faqArr.length - 1].id) + 1 : 0;
    nextId = nextId + "";

    const onAdd = (e) => {
        e.preventDefault();
        if (!title.trim() || !paragraph.trim()) return;
        setFaqArr((prev) => [
            ...prev,
            { id: nextId, title: title.trim(), des: paragraph.trim() },
        ]);
        setTitle("");
        setParagraph("");
    };

    const onDelete = (id) => {
        setFaqArr((prev) => prev.filter((f) => f.id !== id));
    };

    const onEditForm = (e) => {
        e.preventDefault();
        setFaqArr((prev) =>
            prev.map((f) =>
                f.id == faqId ? { ...f, title: editTitle, des: editParagraph } : f
            )
        );
        setShowEditForm(false);
    };

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const onReset = () => {
        setFaqArr(HA_FaqCard_Data);
        localStorage.setItem("faqData", JSON.stringify(HA_FaqCard_Data));
    };

    const section = {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
    };

    const row = {
        hidden: { opacity: 0, y: 10, scale: 0.995 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.28, ease },
        },
        exit: {
            opacity: 0,
            y: -8,
            scale: 0.995,
            transition: { duration: 0.2, ease },
        },
    };

    return (
        <motion.div
            className="white-space ss-dashContainer hero-mt"
            variants={section}
            initial="hidden"
            animate="show"
        >
            {showEditForm ? (
                <div className="ss-dashForm">
                    <h2 className="LexendRegular">Edit FAQ</h2>
                    <form onSubmit={onEditForm}>
                        <div className="ss-dashFormDiv">
                            <label htmlFor="title" className="LexendRegular">
                                Edit Title :
                            </label>
                            <input
                                type="text"
                                id="title"
                                placeholder="Enter Title"
                                className="LexendRegular"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                                ref={editTitleRef}
                            />
                        </div>
                        <div className="ss-dashFormDiv">
                            <label htmlFor="paragraph" className="LexendRegular">
                                Edit Paragraph :
                            </label>
                            <input
                                type="text"
                                id="paragraph"
                                placeholder="Enter Paragraph"
                                className="LexendRegular"
                                value={editParagraph}
                                onChange={(e) => setEditParagraph(e.target.value)}
                            />
                        </div>
                        <div className="ss-dashFormButton">
                            <motion.button
                                type="submit"
                                className="LexendRegular"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.15 }}
                            >
                                Edit FAQ
                            </motion.button>
                        </div>
                    </form>
                </div>
            ) : (
                <div className="ss-dashForm">
                    <h2 className="LexendRegular">Add New FAQ</h2>
                    <form onSubmit={onAdd}>
                        <div className="ss-dashFormDiv">
                            <label htmlFor="title" className="LexendRegular">
                                Title :
                            </label>
                            <input
                                type="text"
                                id="title"
                                placeholder="Enter Title"
                                className="LexendRegular"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>
                        <div className="ss-dashFormDiv">
                            <label htmlFor="paragraph" className="LexendRegular">
                                Paragraph :
                            </label>
                            <input
                                type="text"
                                id="paragraph"
                                placeholder="Enter Paragraph"
                                className="LexendRegular"
                                value={paragraph}
                                onChange={(e) => setParagraph(e.target.value)}
                            />
                        </div>
                        <div className="ss-dashFormButton">
                            <motion.button
                                type="submit"
                                className="LexendRegular"
                                onClick={onAdd}
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                transition={{ duration: 0.15 }}
                            >
                                Add FAQ
                            </motion.button>
                        </div>
                    </form>
                </div>
            )}

            <div className="ss-dashFAQ">
                <table>
                    <thead>
                        <tr>
                            <th className="LexendRegular">Title</th>
                            <th className="LexendRegular">Paragraph</th>
                            <th className="LexendRegular">Actions</th>
                        </tr>
                    </thead>

                    <AnimatePresence component="tbody" mode="popLayout">
                        <tbody>
                            {faqArr.map((faq) => (
                                <motion.tr
                                    key={faq.id}
                                    variants={row}
                                    initial="hidden"
                                    animate="show"
                                    exit="exit"
                                >
                                    <td className="LexendRegular ss-title">{faq.title}</td>
                                    <td className="LexendRegular ss-des">{faq.des}</td>
                                    <td className="btns">
                                        <motion.button
                                            className="LexendRegular btn"
                                            whileHover={{ y: -1 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => {
                                                setShowEditForm(true);
                                                setFaqId(faq.id);
                                                setEditTitle(faq.title);
                                                setEditParagraph(faq.des);
                                                handleScrollTop();
                                            }}
                                        >
                                            Edit
                                        </motion.button>
                                        <motion.button
                                            className="LexendRegular btn danger"
                                            onClick={() => onDelete(faq.id)}
                                            whileHover={{ y: -1 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Delete
                                        </motion.button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </AnimatePresence>
                </table>
            </div>

            <div className="ss-dashFormButton" style={{ marginTop: "24px" }}>
                <motion.button
                    className="LexendRegular reset-btn"
                    onClick={onReset}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                >
                    Reset FAQs
                </motion.button>
            </div>
        </motion.div>
    );
}
