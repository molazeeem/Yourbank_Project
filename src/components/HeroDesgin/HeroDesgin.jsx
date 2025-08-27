import './HeroDesgin.css'

export default function HeroDesgin({ preTitle = false, titleWhite, secondtitleWhite, titleGreen, description, image }) {
  return (
    <div className="rh-hero white-space">
      <div className='rh-heroLeft'>
        {preTitle && (
          <p className='preTitle LexendRegular'>Welcome to YourBank</p>
        )}
        <span className="LexendMedium titleWhite">{titleWhite}</span>
        <span className="LexendMedium titleGreen">{titleGreen}</span>
        <span className='LexendMedium titleWhite'>{secondtitleWhite}</span>
        <p className="LexendLight heroDescription">{description}</p>
      </div>
      <div className="rh-img">
        <img src={image} alt='hero-img' />
      </div>
    </div>
  );
};
