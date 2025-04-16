import React, { useEffect, useState } from 'react';
import './Navbar.css';
import StripesLogoo from '../../assets/StripesLogoo.svg';
import { useNavigate } from 'react-router-dom';
import { FiMoreVertical } from 'react-icons/fi';

const Navbar = ({ aboutRef }) => {
  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleAboutClick = () => {
    if (aboutRef && aboutRef.current) {
      const yOffset = -80; // adjust this value for your header size
      const y = aboutRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${sticky ? 'dark-nav' : ''}`}>
      <img
        src={StripesLogoo}
        alt="Logo"
        className="logo"
        onClick={() => handleNavigate('/')}
      />
      <ul className={menuOpen ? 'open' : ''}>
        <li onClick={() => handleNavigate('/')}>Home</li>
        <li onClick={handleAboutClick}>About Us</li>
        <li onClick={() => handleNavigate('/course')}>Course</li>
        <li onClick={() => handleNavigate('/gallery')}>Gallery</li>
        <li>
          <button className="btn" onClick={() => handleNavigate('/contactus')}>
            Contact us
          </button>
        </li>
        <li onClick={() => handleNavigate('/certificateauthentication')}>Certification Authentication</li>
      </ul>
      <div className="menu-icon" onClick={toggleMenu}>
        <FiMoreVertical size={24} />
      </div>
    </nav>
  );
};

export default Navbar;
