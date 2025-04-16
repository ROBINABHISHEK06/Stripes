import React from 'react';
import './Eeac.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Eeac = () => {
  return (
    <>
      <div className='Eeac'>
        <Navbar />

        <div className="Eeac-text">
          <h1>Electrical, Electronics, and Automation Course </h1>
        </div>

        {/* Course Info Box */}
        <div className="course-info-box">
          <div className="info-item">
          <strong>Beginner level</strong>
          <p>Recommended experience</p>
          </div>

          <div className="divider"></div>

          <div className="info-item">
            <strong>4.7 ⭐</strong>
            <p>(998 reviews)</p>
          </div>

          <div className="divider"></div>

          <div className="info-item">
            <strong>Time Table</strong>
            <p>Recommended experience</p>
          </div>

          <div className="divider"></div>

          <div className="info-item">
            <strong>5 Days</strong>
            <p>at 8 hours a day</p>
          </div>

          <div className="divider"></div>

          {/* ADDING MORE ITEMS BELOW */}
          <div className="info-item">
            <strong>Offline Access</strong>
            <p>Study from institute</p>
          </div>
        </div>
      </div>

      {/* Course Description */}
      <div className="eeaccourse-description">
        <p>
        This is a 6-day program that has an amalgamation of theory and practical for Electrical, Electronics, and Automation control. We utilize diagrams, measuring equipment, PID controller, and SIPART amongst many other items to equip the candidates with foundational knowledge and troubleshooting capabilities.
        </p>
        <br/>
        <p>
        This course is targeted towards operation and well as management level engineers'. 
        </p>
        <br/>
        <p>The course requires a minimum of 6 participants and a maximum of 12.</p>
      </div>
      <Footer/>
    </>
  );
};


export default Eeac;
