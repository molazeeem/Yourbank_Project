import "./SectionTitle.css"

export default function SectionTitle ({ titlewhite, titlegreen, filter, paragraph, reverse, widthtitle = 910, handleUserTypeChange, userType }) {
  return (
    <div className="ST-background">
      <div className="ST-container">
        <div className="ST-title" style={{ maxWidth: `calc((${widthtitle}*100vw/ 1920))` }}>
          <h1 className="LexendMedium">
            <span className={reverse ? "whitetitle greenRevers" : "whitetitle"}>{titlewhite}</span>
            <span className={reverse ? "greentitle whiteRevers" : "greentitle"}>{titlegreen}</span>
          </h1>
          <p className="LexendLight">{paragraph}</p>
        </div>
        <div className={filter ? "filter-IB" : "hidden"}>
          <button
            onClick={() => handleUserTypeChange('Individuals')}
            className={`LexendRegular ${userType === 'Individuals' ? 'filter-active' : ''}`} >For Individuals
          </button>
          <button
            onClick={() => handleUserTypeChange('Businesses')}
            className={`LexendRegular ${userType === 'Businesses' ? 'filter-active' : ''}`} >For Businesses </button>
        </div>
      </div>
    </div>
  )
}


