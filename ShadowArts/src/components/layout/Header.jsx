import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-circle">
          <div className="logo-inner"></div>
        </div>
        <h1 className="site-title">SHADOW ARTS</h1>
      </div>
      <nav className="navbar">
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
          <li><Link to="/workshops" className="nav-link">Workshops</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
