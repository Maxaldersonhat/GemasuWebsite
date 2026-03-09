import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  // Close menu whenever the route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close menu when clicking outside the navbar
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen((prev) => !prev);

  // Close menu on nav link click (also handles same-route taps)
  const handleLinkClick = () => setIsMobileMenuOpen(false);

  const getLinkClass = (path) =>
    location.pathname === path ? 'active' : '';

  return (
    <nav className='navbar' ref={navRef}>
      <img className='logo' src={logo} alt="Company Logo" />

      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" className={getLinkClass('/')} onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/services" className={getLinkClass('/services')} onClick={handleLinkClick}>Services</Link>
          </li>
          <li>
            <Link to="/projects" className={getLinkClass('/projects')} onClick={handleLinkClick}>Our Work</Link>
          </li>
          <li>
            <Link to="/products" className={getLinkClass('/products')} onClick={handleLinkClick}>Products</Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkClass('/contact')} onClick={handleLinkClick}>Contact Us</Link>
          </li>
        </ul>
      </div>

      <img
        className='menu-icon'
        src={menu}
        alt={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        onClick={toggleMenu}
      />
    </nav>
  );
}

export default Navbar;