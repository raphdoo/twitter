import React from 'react';
import './Homepage.css'
import Logo from '../../assets/logo/twitter_logo.png';
import HomeImage from '../../assets/images/twitter_home.png';

const Homepage = () => {
  return (
    <div className='home'>
         {/* <div className='home_left'>
            <img className='home_left--img' src={HomeImage} />
         </div> */}
         <div className='home_right'>
         <img className='home_right' src={Logo} style={{height:'40px', width:'40px'}}/>
         <h1 className='home_right--title'>Happening now</h1>
         <h1 className='home_right--subtitle'>Join Twitter today</h1>
         <div className='home-right--auth_buttons'>
            <button>Sign up with Google</button>
            <button>Sign up with Apple</button>
            <button>Sign up with phone or email</button>
            <p className='policies'>
                By sigining up, you agree to the <a>Terms of Service</a> and Privacy Policy,
                including Cookie use.
            </p>         
         </div>
         </div>
    </div>
  );
}

export default Homepage;
 