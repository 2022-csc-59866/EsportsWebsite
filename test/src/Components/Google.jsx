import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";
import jwt_decode from "jwt-decode";

function Google() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  function handleLoginSuccess(response) {
    const idToken = response.getAuthResponse().id_token;
    const userObject = jwt_decode(idToken);
    setUser(userObject);
    navigate("/");
  }

  function handleLogoutSuccess() {
    setUser(null);
  }

  useEffect(() => {
    // Add any necessary configurations for the Google Sign-In API library

    // Example usage of the Google Sign-In API library
    // You can modify this code according to your needs
    const initializeGoogleSignIn = () => {
      // Add the necessary initialization code here
    };

    initializeGoogleSignIn();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          <GoogleLogout
            clientId="936204541173-nc9r4ju07i2qh07pkmrnemarnlu5bcj8.apps.googleusercontent.com"
            buttonText="Sign Out"
            onLogoutSuccess={handleLogoutSuccess}
          />
        </div>
      ) : (
        <GoogleLogin
          clientId="936204541173-nc9r4ju07i2qh07pkmrnemarnlu5bcj8.apps.googleusercontent.com"
          buttonText="Sign In with Google"
          onSuccess={handleLoginSuccess}
          onFailure={console.error}
          cookiePolicy="single_host_origin"
        />
      )}
    </div>
  );
}

export default Google;
