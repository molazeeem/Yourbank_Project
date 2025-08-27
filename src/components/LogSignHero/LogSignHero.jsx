import './LogSignHero.css'
import { Link } from 'react-router-dom'
import IconShape from '../iconShape/IconShape'


export default function LogSignHero ({ title, description, isSignUp })  {
  const pathName = window.location.pathname;

  return (
    <div className={`rh_containr white-space section-MarginBottom ${pathName == "/Bank_Project/" ? "homeHero-mt" : "hero-mt"}`}>
      <img src="assets/images/logeIn-signUp/login-background.webp" alt="background" className='rh-LS-background' />
      <img src="assets/images/AbstractDesign/heroDesign.webp" alt="heroDesign" className='rh-LS-background-TopRight' />
      <div className="rh_titelPart">
        <h1 className="LexendMedium">{title}</h1>
        <p className="LexendLight">{description}</p>
      </div>
      <div className="rh_inputPart">
        <form>
          {isSignUp && (
            <>
              <input type="text" placeholder="Enter First Name" className='LexendLight ' />
              <input type="text" placeholder="Enter Last Name" className='LexendLight ' />
            </>
          )}
          <input type="email" placeholder="Enter your Email" className='LexendLight ' />
          <input type="password" placeholder="Enter your Password" className='LexendLight ' />
        </form>
        {!isSignUp && (
          <div className="rh_forgotPart LexendRegular">
            <Link to="#">Forgot Password?</Link>
          </div>
        )}

        <button type="submit" className="rh_logBtn LexendRegular ">
          {isSignUp ? "Sign Up" : "Login"}
        </button>

        <Link to={isSignUp ? "/login" : "/signup"} className='rh_sinBtnLink'>
          <button type="button" className="rh_sinBtn LexendRegular ">
            {isSignUp ? "Login" : "Sign Up"}
          </button>
        </Link>
        <div className="rh_comment">
          <div className="rh_Line"></div>
          <span className="rh_text LexendRegular">Or Continue with</span>
          <div className="rh_Line"></div>
        </div>
        <div className="rh_social">
          <a href="https://accounts.google.com/signin/v2/usernamerecovery?flowName=GlifWebSignIn&flowEntry=ServiceLogin"><IconShape icon='assets/images/Icons/google-icon.svg' className="logSignPageIcon" size="88" /></a>
          <a href="https://www.facebook.com/"><IconShape icon='assets/images/Icons/facebook-signLog.svg' className="logSignPageIcon" size="88" /></a>
          <a href="https://account.apple.com/nl"><IconShape icon='assets/images/Icons/Apple-icon.svg' className="logSignPageIcon" size="88" /></a>
        </div>
      </div>
    </div>
  )
}