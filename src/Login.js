import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import smIcon from './images/smIcon.png';
import user from './images/user.png';
import './Login.css';
import HomePage from './HomePage/HomePage.js';

const clientId = "1055202909846-2qjhnjrg0g3pdjkscog9jjefsdop0osp.apps.googleusercontent.com";

function Login() {
  const [showloginButton, setShowLoginButton] = useState(true);
  const [showlogoutButton, setShowLogoutButton] = useState(false);

  const onLoginSuccess = (res) => {
    console.log('Login Success: ', res.profileObj);
    setShowLoginButton(false);
    setShowLogoutButton(true);
  }

  const onLoginFailure = (res) => {
    console.log('Login Failure: ', res);
  }

  const onSignoutSuccess = () => {
    alert('You have been signed out successfully.');
    setShowLoginButton(true);
    setShowLogoutButton(false);
    console.clear();
  }

  return (
    <div>
      <img src={smIcon} alt="smIcon" className='smIcon-profile' />
      <div className='main'>
        <div className='sub-main'>
          <div>
            <div className='image'>
              <div className='container-image'>
                <img src={user} alt="user" className='user-profile' />
              </div>
            </div>

            <div className='google-login'>
              {showloginButton ?
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Sign In"
                  onSuccess={onLoginSuccess}
                  onFailure={onLoginFailure}
                  cookiePolicy={'single_host_origin'}
                  isSignedIn={true}
                /> : null}
            </div>
            <div>
              {/* For Logout  */}
              {showlogoutButton ?
                <GoogleLogout
                  clientId={clientId}
                  buttonText="Sign Out"
                  onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
              }
            </div>
          </div>
        </div>
      </div>
      <div>
        <h5>
          Wants an <a href="_blank"> account?</a>
        </h5>
      </div>
      <HomePage></HomePage>
    </div>
  );
}

export default Login;
