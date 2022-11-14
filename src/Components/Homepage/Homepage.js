import React from "react";
import "./Homepage.css";
import Logo from "../../assets/logo/twitter_logo.png";
import CloseBtn from "../../assets/images/close_btn.png";

import AppleLogo from "../../assets/logo/Apple_logo.svg"
import GoogleLogo from "../../assets/logo/Google_logo.png"

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage_main">
        <div className="homepage_main_topBtns">
            <div className="closeBtnArea">
            <div className="closeBtn"><img
            className="homepage_main-logo"
            src={CloseBtn}
            style={{ height: "20px", width: "20px" }}
            alt="close button"
          /></div>
            </div>
            <div className="logoImg"><img
            className="homepage_main-logo"
            src={Logo}
            alt="twitter logo"
          /></div>
        </div>
        <div className="homepage_main_body">
          <h1 className="homepage_main--subtitle">Join Twitter today</h1>
          <div className="homepage_main--btns">
            <button className="btn-primary"><p><img src={AppleLogo} style={{height:"15px", width:"15px"}} alt="apple logo"></img>  Sign up with Google</p></button>
            <button className="btn-primary"><p><img src={GoogleLogo} style={{height:"14px", width:"18px"}} alt="google logo"></img>  Sign up with Apple</p></button>
            <p className="or">or</p>
            <button className="btn-secondary">
              <p>Sign up with phone or email</p>
            </button>
            <p className="homepage_main--policies">
              By sigining up, you agree to the <a href="#">Terms of Service</a>{" "}
              and <a href="#">Privacy Policy</a> including{" "}
              <a href="#">Cookie Use</a>.
            </p>
          </div>
          <div className="homepage_main--btns">
            <h3>Already have an account? <a href="#">Sign in</a></h3>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Homepage;
