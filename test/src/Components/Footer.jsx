import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
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
                    <input type="email" name="email" placeholder='Email address' className="footer-input" />
                    <button className='subscribe'>Subscribe</button>
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