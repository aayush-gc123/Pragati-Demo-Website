import React, { useState } from 'react';
import './Navbar.css'; // Import CSS file

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1>Pragati Secondary School</h1>
      </div>
      <div className={`menu-icon ${showMenu ? 'close' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <ul className={`navbar-list ${showMenu ? 'show' : ''}`}>
        <li className="navbar-item"><a href="/" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="/about" className="navbar-link">About</a></li>
        <li className="navbar-item"><a href="/services" className="navbar-link">Services</a></li>
        <li className="navbar-item"><a href="/contact" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
