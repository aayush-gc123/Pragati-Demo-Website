import React, { useState } from 'react';
import './Navbar.css'; // Import CSS file
import { NavLink } from 'react-router-dom';
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
        <li className="navbar-item"><NavLink to = "/" className="navbar-link">Home</NavLink></li>
        <li className="navbar-item"><NavLink to = "/about" className="navbar-link">About</NavLink></li>
        <li className="navbar-item"><NavLink to = "/services" className="navbar-link">Services</NavLink></li>
        <li className="navbar-item"><NavLink to = "/contact" className="navbar-link">Contact</NavLink></li>
        <li className="navbar-item"><NavLink to = "/gallery" className="navbar-link">Gallery</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
