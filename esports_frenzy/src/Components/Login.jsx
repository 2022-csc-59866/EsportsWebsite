import React, { useState } from "react";
import { Link } from 'react-router-dom';
import httpclient from "../httpclient";
import Google from "./Google";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const logInUser = async () => {
        try {
          await httpclient.post("https://esports-frenzy-flask.onrender.com/login", {
            email,
            password,
          });
          window.location.href = "/";
        } catch (error) {
          if (error.response.status === 401) {
            alert("Invalid credentials");
          }
        }
    };

    return (
        <div className="login-form">
                <h1>Sign In</h1>
                <form>
                    <div>
                        <label>Email </label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"></input>
                    </div>
                    <div>
                        <label>Password </label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                    </div>
                    <button className="login-btn" type="button" onClick={() => logInUser()}>
                        Sign In
                    </button>
                    <div className="register-label">
                        <h5>Don't have an account?</h5>
                        <Link to="/register">
                        <button className="login-btn">Register here</button>
                        </Link>
                    </div>
                </form>
                <div style={{ textAlign: "center", padding: '20px' }}>
                  <Google />
                </div>
        </div>
    )
}