import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading"> About Gemasu Paints</h3>
          <p className="footer-text">
            We are committed to providing exceptional paint products and inspiring a colorful world. Proudly Kenyan.
          </p>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/projects">Projects</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Connect With Us</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Our Location</h3>
          <p className="footer-text">
            Kondele Flyover, Kisumu, Kenya<br />
            Phone: +254-715-268-011<br />
            Email: support@gemasupaints.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Gemasu Paints. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;