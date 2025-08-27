import "./FeaturesFilter.css";
import { motion } from "framer-motion";
import { useRef } from "react";

export default function FeaturesFilter({ group, setGroup }) {
  const btnRefs = useRef([]);

  const tabs = [
    { id: 0, label: "Online Banking" },
    { id: 1, label: "Financial Tools" },
    { id: 2, label: "Customer Support" },
  ];

  const handleClick = (id, idx) => {
    setGroup(id);
    const el = btnRefs.current[idx];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  return (
    <div className="aa-features-filter" role="tablist" aria-label="Feature filters">
      <div className="aa-filter LexendRegular">
        {tabs.map((t, i) => {
          const isActive = group === t.id;
          return (
            <button
              key={t.id}
              ref={(el) => (btnRefs.current[i] = el)}
              className={`aa-filter-button ${isActive ? "is-active" : ""}`}
              onClick={() => handleClick(t.id, i)}
            >
              <span>{t.label}</span>
              {isActive && (
                <motion.span
                  layoutId="aa-filter-underline"
                  className="aa-filter-underline"
                  transition={{ type: "spring", stiffness: 450, damping: 40 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
