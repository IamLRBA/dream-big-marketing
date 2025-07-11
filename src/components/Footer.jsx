import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import '../assets/styles/components/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-title">Dream Big Marketing</h3>
            <p className="footer-about">
              We help businesses grow through innovative marketing strategies and data-driven solutions.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Services</h3>
            <ul className="footer-links">
              <li>
                <Link to="/services/service1">Digital Marketing</Link>
              </li>
              <li>
                <Link to="/services/service2">SEO Optimization</Link>
              </li>
              <li>
                <Link to="/services/service3">Social Media Management</Link>
              </li>
              <li>
                <Link to="/services/service4">Content Marketing</Link>
              </li>
              <li>
                <Link to="/services/service5">Brand Strategy</Link>
              </li>
              <li>
                <Link to="/services/service6">Market Research</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <FaMapMarkerAlt />
                <span>123 Marketing St, Business District, City, Country</span>
              </li>
              <li>
                <FaPhone />
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <FaEnvelope />
                <span>info@dreambigmarketing.com</span>
              </li>
              <li>
                <FaClock />
                <span>Mon-Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Dream Big Marketing Consultancy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;