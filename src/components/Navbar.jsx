import React from 'react'
import './Navbar.css'


function Navbar() {
  
return (
    <nav className='navbar'>
      <img className='logo' src="src/assets/logo.png" alt="Company Logo" />
      <div className= 'nav-links' >
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/projects">Our Work</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
      <img className='menu-icon' src="src/assets/menu.png" alt="Menu Icon" />
    </nav>
  )
}

export default Navbar
