import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    showFooter && (
      <div className='footer'>
        <p>&copy; 2024 Escape Explore. All rights are reserved.</p>
        <ul>
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    )
  );
}

export default Footer;
