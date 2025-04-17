import React from 'react';
import './Lvm.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Lvm = () => {
  return (
    <>
      <div className='Lvm'>
        <Navbar />

        <div className="Lvm-text">
          <h1>The Role-Based Bridge</h1>
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
            <strong>2 Days</strong>
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
      <div className="lvmcourse-description">
        <p>
        This 2-day course covers the basics of ship handling and includes practical simulator
        exercises specific to the participant’s lined-up ship type such as VLCC, Aframax, 20K TEU vessel, and VLGC.
        </p>
        <br/>
        <p>
        The training uses a state-of-the-art Full Mission Simulator.
        </p>
        <br/>
        <p>It requires a minimum of 4 and a maximum of 8 participants.</p>
      </div>
      <Footer/>
    </>
  );
};


export default Lvm;
