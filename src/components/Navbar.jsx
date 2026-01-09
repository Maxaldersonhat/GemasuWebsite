import React, { useState, useEffect } from 'react';
import './Navbar.css';

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
      <img className='logo' src="src/assets/logo.png" alt="Company Logo" />
      
      <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <a href="/" className={getLinkClass('/')}>Home</a>
          </li>
          <li>
            <a href="/services" className={getLinkClass('/services')}>Services</a>
          </li>
          <li>
            <a href="/projects" className={getLinkClass('/projects')}>Our Work</a>
          </li>
          <li>
            <a href="/products" className={getLinkClass('/products')}>Products</a>
          </li>
          <li>
            <a href="/contact" className={getLinkClass('/contact')}>Contact Us</a>
          </li>
        </ul>
      </div>

      <img 
        className='menu-icon' 
        src="src/assets/menu.png" 
        alt="Menu Icon" 
        onClick={toggleMenu}
      />
    </nav>
  );
}

export default Navbar;