import React from 'react'
import { Link } from 'react-router-dom';
import SSCB from '../assets/solar_shield-check-bold.svg';
import "../styles/ContactSupport.css";
import Send from '../assets/Send.svg';

function ContactSupport() {
  return (
    <div className='ContactSupport'>
      <div className='support'>
        <h3>SUPPORT</h3>
        <Link to="/HelpCenter" className="helpcenter-link">
          <img src={SSCB} alt="helpcenter" />
          <span>Help Center</span>
        </Link>
      </div>
      <div className='Contactus'>
        <h3>CONTACT US</h3>
        <form>
          <div className='input'>
            <label>
              <p>Name:</p>
              <input type="text" name="name" placeholder="Your Name" required />
            </label>

            <label>
            <p>Email:</p>
              <input type="email" name="email" placeholder="your@email.com" required />
            </label>

            <label>
            <p>Phone Number:</p>
              <input type="tel" name="phone" placeholder="09XX-XXX-XXXX" required />
            </label>
          </div>

          <div className='textarea'>
            <label>
              <p>Message:</p>
              <textarea name="message" placeholder="Type your message here..." rows="4" required />
            </label>
          </div>

          <div className='button'>
            <button type="submit"><img src={Send} alt="Send" /><span>Send</span></button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactSupport