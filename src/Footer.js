import React from 'react'
import "./Footer.css";
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
      
      <div>
  <footer className="main-footer">
    <div className="footer-container">
      <div className="footer-column agency-info">
        <div className="footer-logo">
          <span className="logo-text">PROSPERA <span className="agency">AGENCY</span></span>
        </div>
        <p className="agency-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="social-links">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f" /></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter" /></a>
          <a href="#" aria-label="Google Plus"><i className="fab fa-google-plus-g" /></a>
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in" /></a>
        </div>
      </div>
      <div className="footer-column">
        <h4 className="column-title">Company</h4>
        <ul className="footer-links">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/services'}>Services</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4 className="column-title">Business</h4>
        <ul className="footer-links">
          <li><a href="#">Project</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Facts</a></li>
          <li><a href="#">Customers</a></li>
        </ul>
      </div>
      <div className="footer-column contact-info">
        <h4 className="column-title">Get In Touch</h4>
        <address className="contact-details">
          <p>Rt. 66, Downtown, Washington, DC</p>
          <p><a href="mailto:info@example.com">info@example.com</a></p>
          <p><a href="tel:1-800-123-4567">1-800-123-4567</a></p>
          <p><a href="tel:+0019876543210">+001 987-654-3210</a></p>
        </address>
      </div>
    </div>
    <div className="copyright-bar">
      <p>Copyright © 2025 Prospera | Powered by Prospera</p>
    </div>
  </footer>
</div>



    </div>
  )
}

export default Footer
