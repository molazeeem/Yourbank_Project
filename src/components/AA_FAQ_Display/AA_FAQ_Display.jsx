import HA_FaqCard from "../HA_FaqCard/HA_FaqCard"
import SectionTitle  from "../SectionTitle/SectionTitle"

import "./AA_FAQ_Display.css"

export default function AA_FAQ_Display() {
  return (
    <div className="aa-faq-container white-space section-MarginBottom ">
      <SectionTitle reverse={true} titlegreen={" Asked Questions"} titlewhite={"  Frequently"} paragraph={"Still you have any questions? Contact our Team via support@yourbank.com"} />
      <HA_FaqCard />
    </div>
  )
}
