import { HA_FaqCard_Data } from "../../data/HA_FaqCard_Data";
import "./HA_FaqCard.css";
import { useEffect, useMemo, useState } from "react";

export default function HA_FaqCard() {
  // bootstrap LS safely
  useEffect(() => {
    if (!localStorage.getItem("faqData")) {
      localStorage.setItem("faqData", JSON.stringify(HA_FaqCard_Data));
    }
  }, []);

  const data2 = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("faqData")) || HA_FaqCard_Data;
    } catch {
      return HA_FaqCard_Data;
    }
  }, []);

  const [load, setLoad] = useState(false);        // expanded
  const [collapsing, setCollapsing] = useState(false); // exit animation flag

  const handleToggle = () => {
    if (load) {
      // animate out extras, then actually collapse
      setCollapsing(true);
      setTimeout(() => {
        setCollapsing(false);
        setLoad(false);
      }, 260); // match CSS fadeOutDown duration
    } else {
      setLoad(true); // expand instantly; CSS handles fadeIn
    }
  };

  return (
    <div className="aa-contain">
      <div
        className={[
          "aa-faq-container-card",
          load ? "aa-container-normal-height" : "",
          collapsing ? "aa-collapsing" : "",
        ].join(" ").trim()}
      >
        {data2.map((card) => (
          <div key={card.id ?? card.title} className={`${load ? "aa-card-shadow aa-card-shadow-text" : ""} faqCard`}>
            <p className="FAQ-title LexendMedium">{card.title}</p>
            <div className="FAQ-divider"></div>
            <p className="FAQ-des LexendLight">{card.des}</p>
          </div>
        ))}
      </div>

      <button
        className={`${load ? "aa-change-content" : ""} aa-show-less`}
        onClick={handleToggle}
      >
        Show Less <img className="showLessArrow" src="assets/images/Icons/faq-arrow.svg" alt="arrow" />
      </button>

      <button
        onClick={handleToggle}
        className={`aa-faq-btn ${load ? "aa-hide-content" : ""}`}
      >
        Load All FAQs <img src="assets/images/Icons/faq-arrow.svg" alt="arrow" />
      </button>
    </div>
  );
}
