import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './NavigationalBar.css';
import Logo from '../../assets/Logo.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Add icons for the mobile menu

const NavigationalBar = () => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to manage mobile menu

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={Logo} alt='Escape_Explore_Logo' className='logo' />
      <div className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/accommodation">Accommodation</Link></li>
        <li><Link to="/transportation">Transportation</Link></li>
        <li><Link to="/attractions">Attractions</Link></li>
        <li><Link to="/contact-us">Contact Us</Link></li>
        <li><Link to="/signup-login?action=Sign%20Up"><button className='btn'>Register</button></Link></li>
        <li><Link to="/signup-login?action=Login"><button className='btn'>Login</button></Link></li>
      </ul>
    </nav>
  );
};

export default NavigationalBar;
