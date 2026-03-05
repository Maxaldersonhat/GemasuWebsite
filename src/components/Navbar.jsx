import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';
import menu from '../assets/menu.png';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // State to track current path
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Get the current path (e.g., "/services" or "/")
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper to determine if a link is active
  const getLinkClass = (path) => {
    return currentPath === path ? 'active' : '';
  };

  return (
    <nav className='navbar'>
      <img className='logo' src={logo} alt="Company Logo" />
      
      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <Link to="/" className={getLinkClass('/')}>Home</Link>
          </li>
          <li>
            <Link to="/services" className={getLinkClass('/services')}>Services</Link>
          </li>
          <li>
            <Link to="/projects" className={getLinkClass('/projects')}>Our Work</Link>
          </li>
          <li>
            <Link to="/products" className={getLinkClass('/products')}>Products</Link>
          </li>
          <li>
            <Link to="/contact" className={getLinkClass('/contact')}>Contact Us</Link>
          </li>
        </ul>
      </div>

      <img 
        className='menu-icon' 
        src= {menu}
        alt="Menu Icon" 
        onClick={toggleMenu}
      />
    </nav>
  );
}

export default Navbar;