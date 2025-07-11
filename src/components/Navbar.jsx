import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaSearch, FaTimes, FaBars } from 'react-icons/fa';
import SearchBar from './SearchBar';
import '../assets/styles/components/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
    if (isOpen) setIsOpen(false);
  };

  const closeAll = () => {
    setIsOpen(false);
    setSearchOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <Link to="/" className="logo" onClick={closeAll}>
          Dream<span>Big</span>
        </Link>

        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} onClick={closeAll}>
            <FaHome className="nav-icon" /> Home
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} onClick={closeAll}>
            About
          </Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`} onClick={closeAll}>
            Services
          </Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeAll}>
            Contact
          </Link>
        </div>

        <div className="nav-actions">
          <button className="search-toggle" onClick={toggleSearch}>
            {searchOpen ? <FaTimes /> : <FaSearch />}
          </button>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`search-container ${searchOpen ? 'open' : ''}`}>
          <SearchBar closeSearch={closeAll} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;