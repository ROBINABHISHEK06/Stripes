import React, { useEffect } from 'react';
import './Footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import sarm from '../../assets/sarm.png';

const Footer = () => {
  useEffect(() => {
    const letters = document.querySelectorAll(".glow-text span");

    letters.forEach(letter => {
      letter.addEventListener("touchstart", () => {
        letter.classList.add("active");
        setTimeout(() => letter.classList.remove("active"), 500);
      });
    });

    return () => {
      letters.forEach(letter => {
        letter.removeEventListener("touchstart", () => {});
      });
    };
  }, []);

  return (
    <div className="footer">
      {/* Glow Text at the Top */}
      <div className="glow-text-container">
        <h1 className="glow-text">
        <img src={sarm} className='sarm'/>
         <span className="my-icon"> </span><span>S</span><span>T</span><span>R</span><span>I</span><span>P</span><span>E</span><span>S</span> &nbsp;&nbsp; <span>A</span><span>C</span><span>A</span><span>D</span><span>E</span><span>M</span><span>Y</span>
        </h1>
      </div>

      {/* Footer Content Below */}
      <div className="footer-content">
        <div className="left">
          {/* <img src={StripesLogoo} className="logoo" alt="Stripes Logo" /> */}
          <p className="description">
          St. Xavier's Campus Shilpalaya, Vinayalaya Mahakali Caves Road Behind Holy Family Church Mumbai 400093, INDIA
          </p>
          <div className="social-container">
            <div className="social-icon" style={{ backgroundColor: '#385999' }}><FacebookOutlinedIcon /></div>
            <div className="social-icon" style={{ backgroundColor: '#E4405F' }}><InstagramIcon /></div>
            <div className="social-icon" style={{ backgroundColor: '#55ACEE' }}><TwitterIcon /></div>
          </div>
        </div>
        <div className="center">
          <h3 className="title">Useful Links</h3>
          <ul className="list">
            <li className="list-item">Home</li>
            <li className="list-item">About us</li>
            <li className="list-item">Course</li>
            <li className="list-item">Gallery</li>
            <li className="list-item">Contact us</li>
            <li className="list-item">Certificate Authentication</li>
          </ul>
        </div>
        <div className="right">
          <h3 className="title">Contact</h3>
          <div className="contact-item"><LocationOnIcon style={{ marginRight: '10px' }} /> Mumbai, India</div>
          <div className="contact-item"><PhoneIcon style={{ marginRight: '10px' }} /> 022 4749 9225</div>
          <div className="contact-item"><MailIcon style={{ marginRight: '10px' }} /> training@stripesacademy.net</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;