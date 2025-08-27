import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import AA_MissionVision from "../AA_MissionVision/AA_MissionVision";
import SectionTitle from "../SectionTitle/SectionTitle";
import { missionVisionData } from "../../data/MissionAndVisionData";
import "./AA_MvDisplay.css";

export default function AA_MvDisplay() {
  const [MVcards, setCards] = useState([]);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const storageData = localStorage.getItem("MVcards");
    if (storageData) {
      setCards(JSON.parse(storageData));
    } else {
      localStorage.setItem("MVcards", JSON.stringify(missionVisionData));
      setCards(missionVisionData);
    }
  }, []);

  return (
    <section className="aa-mv-container white-space section-MarginBottom">
      <SectionTitle
        filter={false}
        widthtitle={1296}
        titlegreen="Mission & vision"
        paragraph="We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development"
      />

      {MVcards.map((item) => (
        <AA_MissionVision
          key={item.id}
          AaimageSrc={item.AaimageSrc} 
          Aareverse={item.Aareverse}  
          MvTitle={item.MvTitle}
          Mvdes={item.Mvdes}
        />
      ))}
    </section>
  );
}
