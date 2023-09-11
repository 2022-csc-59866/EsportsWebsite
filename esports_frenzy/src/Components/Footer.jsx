import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import httpclient from "../httpclient";
import './Footer.css';

function Footer() {
    const [email, setEmail] = useState('');

    const joinList = async () => {
        try {
            await httpclient.post("//localhost:8000/subscription", {
            email,
          });
        } catch (error) {
          if (error.response.status === 401) {
            alert("Invalid email");
          }
        }
    };

    return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the Frenzy Newsletter to receive the best Esports News!
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time. 
            </p>
            <div className='input-areas'>
                <form>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" placeholder='Email address' className="footer-input" />
                    <button onClick={() => joinList()} className='subscribe'>Subscribe</button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About</h2>
                    <Link to='/about'>Our Mission</Link>
                    <Link to='/careers'>Careers</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>Contact Us</h2>
                    <Link to='/contact'>Send a message</Link>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer