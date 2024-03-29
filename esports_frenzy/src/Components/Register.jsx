import React, { useState } from "react";
import { Link } from 'react-router-dom';
import httpclient from "../httpclient";
import './Login.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = async () => {
        try {
          await httpclient.post("https://esports-frenzy-flask.onrender.com/register", {
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
            <h1>Create Account</h1>
            <form>
                <div>
                    <label>Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address"></input>
                </div>
                <div>
                    <label>Password </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
                </div>
                <button className="login-btn" type="button" onClick={() => registerUser()}>
                    Submit
                </button>
                <div>
                <Link to="/auth">Return to sign in</Link>
                </div>
            </form>
        </div>
    )
}