import "./FooterTitle.css"
import { Link } from "react-router-dom"

export default function FooterTitle({ title, paragraph }) {
  return (
    <div className="FT-background section-MarginBottom">
      <div className="FooterTitle">
        <img src="./assets/images/AbstractDesign/AbstractDesign.webp" />
        <div className="FT-text-container">
          <h3 className="LexendRegular FT-title">{title} <span>YourBank today!</span></h3>
          <p className="LexendLight FT-des">{paragraph}</p>
        </div>
        <Link className="LexendRegular linkFooterTitle" to={"/signUp"}><p>Open Account</p></Link>
      </div>
    </div>
  )
}