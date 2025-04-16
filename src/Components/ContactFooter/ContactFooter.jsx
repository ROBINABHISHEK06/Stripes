import React from 'react';
import './ContactFooter.css';
import { useNavigate } from 'react-router-dom';

const ContactFooter = () => {
  const navigate = useNavigate();
  
  return (
    <div className='wave-container'>
      <h2 className='footercontent'>
        Do you want to know more? 
      </h2>
        <p className='uscontact'> Contact us today!</p>
      <button className='clkbtn' onClick={() => navigate('/contactus')}>Click here</button>

      <div className='wave' id='wave1'></div>
      <div className='wave' id='wave2'></div>
      <div className='wave' id='wave3'></div>
      <div className='wave' id='wave4'></div>
    </div>
  );
};

export default ContactFooter;
