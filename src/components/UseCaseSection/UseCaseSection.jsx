import  SectionTitle  from "../SectionTitle/SectionTitle"
import UseCaseRow from "../UseCaseRow/UseCaseRow"
import { UseCaseData_1 } from "../../data/UseCaseCardData"
import { UseCaseData_2 } from "../../data/UseCaseCardData"
import { individuals_1 } from "../../data/UseCaseCardData"
import { individuals_2 } from "../../data/UseCaseCardData"
import "./UseCaseSection.css"

export default function UseCase () {
    return (
        <div className="white-space section-MarginBottom">
            <SectionTitle titlegreen="Use Cases" paragraph="At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions" />
            <UseCaseRow useCaseData={UseCaseData_1} indiv={individuals_1} title="For Individuals" para="For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers" />
            <UseCaseRow useCaseData={UseCaseData_2} indiv={individuals_2} title="For Business" para=" For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them" reverce />
        </div>
    )
}
