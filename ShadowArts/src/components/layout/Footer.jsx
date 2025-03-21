import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';
import '../../App.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <div className="logo-circle"></div>
            <h2>SHADOW ARTS</h2>
          </div>
          <p className="tagline">
            Exploring the interplay of light and darkness through contemporary art since 2020.
          </p>
        </div>

        <div className="footer-links">
          <div className="links-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/exhibitions">Exhibitions</a></li>
            </ul>
          </div>

          <div className="links-column">
            <h3>Resources</h3>
            <ul>
              <li><a href="/for-artists">For Artists</a></li>
              <li><a href="/for-collectors">For Collectors</a></li>
              <li><a href="/press-kit">Press Kit</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="social-links">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
          </div>
        </div>
        <div className="footer-divider"></div>
        <p className="copyright">© 2025 Shadow Arts. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;