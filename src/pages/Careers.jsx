import AA_CareerFTitle from "../components/AA_CareerFTitle/AA_CareerFTitle";
import AA_CareerHero from "../components/AA_CareerHero/AA_CareerHero";
import AA_FAQ_Display from "../components/AA_FAQ_Display/AA_FAQ_Display";
import AA_OurValue from "../components/AA_OurValue/AA_OurValue";
import HA_JobOpeningsSection from "../components/HA_JobOpeningsSection/HA_JobOpeningsSection";
import OurBenefitsSection from "../components/OurBenefitsSection/OurBenefitsSection";

export default function Careers() {
    return (
        <div>
            <AA_CareerHero />
            <AA_OurValue />
            <OurBenefitsSection />
            <HA_JobOpeningsSection />
            <AA_FAQ_Display />
            <AA_CareerFTitle />
        </div>
    )
}

