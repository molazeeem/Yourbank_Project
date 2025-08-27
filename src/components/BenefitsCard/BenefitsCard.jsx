import "./BenefitsCard.css"
import IconShape from "../iconShape/IconShape"
export default function BenefitsCard ({ borderClassName,sizeIco, srcIco, classNameIco, title, paragraph}) {
  return (
    <div className={`OBC-container ${borderClassName} `}>
        <div className="OB-card-title">
            <IconShape size={sizeIco} icon={srcIco} className={classNameIco}></IconShape>
            <h3 className="LexendRegular">{title}</h3>
        </div>
        <p className="LexendLight">{paragraph}</p>
    </div>
  )
}
