import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Solid icons (for general UI elements)
import { 
  faMusic,
  faShieldAlt,
  faFileAlt
} from '@fortawesome/free-solid-svg-icons';

// Brand icons (for social media & platforms)
import { 
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faSpotify,
  faApple
} from '@fortawesome/free-brands-svg-icons';

// Heroicons (for navigation links)
import {
  HiOutlineHome,
  HiOutlineUsers,
  HiOutlineMail,
  HiOutlinePhotograph,
  HiOutlineFolderOpen,
  HiOutlineNewspaper,
  HiOutlineShieldCheck,
  HiOutlineDocumentText
} from 'react-icons/hi';
import {
  HiOutlineChartBar
} from 'react-icons/hi';
import { HiOutlineCog6Tooth } from 'react-icons/hi2';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      {/* CTA Section */}
      <div className="footer-cta">
        <h3>Ready to grow your business?</h3>
        <Link to="/contact" className="btn">Get A Free Consultation</Link>
      </div>

      {/* Wave Section */}
      <div className="footer-wave"></div>
      
      {/* Main Footer Content */}
      <div className="footer-container">
        {/* About Column */}
        <div className="footer-section brand-section">
          <div className="footer-logo">
            <HiOutlineChartBar icon={faMusic} className="logo-icon" />
            <h3>Dream Big Marketing®</h3>
          </div>
          <p className="brand-tagline">
            We help businesses unlock their full potential through powerful, 
            results-driven marketing strategies that combine local insights 
            with modern marketing expertise.
          </p>
          
          <div className="social-media">
  <h4>Connect With Us</h4>
  <div className="social-icons">
    <a href="https://www.facebook.com/share/1WWcyXB7qR/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
      <FontAwesomeIcon icon={faFacebook} className="social-icon" />
    </a>
    <a href="https://x.com/dbigmkt" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
      <FontAwesomeIcon icon={faTwitter} className="social-icon" />
    </a>
    <a href="https://www.instagram.com/dbigmkt/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
      <FontAwesomeIcon icon={faInstagram} className="social-icon" />
    </a>
    <a href="https://www.youtube.com/@DbigMkt" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
      <FontAwesomeIcon icon={faYoutube} className="social-icon" />
    </a>
  </div>
</div>
        </div>
        
        {/* Quick Links Column */}
        <div className="footer-section">
          <h3 className="footer-section-title">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/"><HiOutlineHome className="link-icon" /> Home</Link></li>
            <li><Link to="/about"><HiOutlineUsers className="link-icon" /> About Us</Link></li>
            <li><Link to="/Services"><HiOutlineCog6Tooth className="link-icon" /> Services</Link></li>
            <li><Link to="/Portfolio"><HiOutlineFolderOpen className="link-icon" /> Portfolio</Link></li>
            <li><Link to="/Gallery"><HiOutlinePhotograph className="link-icon" /> Gallery</Link></li>
            <li><Link to="/contact"><HiOutlineMail className="link-icon" /> Contact</Link></li>
            <li><Link to="/Blog"><HiOutlineNewspaper className="link-icon" /> Blog</Link></li>
          </ul>
        </div>
        
        {/* Legal Column */}
        <div className="footer-section">
          <h3 className="footer-section-title">Legal</h3>
          <ul className="footer-links">
  <li><Link to="/privacy-policy"><HiOutlineShieldCheck className="link-icon" /> Privacy Policy</Link></li>
  <li><Link to="/terms"><HiOutlineDocumentText className="link-icon" /> Terms of Service</Link></li>
</ul>
          
          
          
        </div>
      </div>
      
      {/* Copyright Section */}
      <div className="footer-bottom">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Dream Big Marketing Consultancy. All rights reserved.
        </p>
        <p className="designed-by">
  Designed by - <a href="https://www.instagram.com/iamlrba?igsh=MXcwcTF3b3R6ZG9yeQ%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer">LRBA</a>
</p>
      </div>
    </footer>
  );
};

export default Footer;