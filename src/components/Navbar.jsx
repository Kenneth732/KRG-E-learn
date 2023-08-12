import React, { useState } from 'react';
import './Navbar.css';
import Logo from '../components/data/kagoLearn.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='Headers'>
      <nav className="navbar">
        <div className="logo">
          <img src={Logo} alt="logo" className='logo' />
        </div>
        <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li><a href="">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Team</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
