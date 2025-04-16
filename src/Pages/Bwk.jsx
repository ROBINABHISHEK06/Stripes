import React from 'react';
import './Bwk.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Bwk = () => {
  return (
    <>
      <div className='bwk'>
        <Navbar />

        <div className="bwk-text">
          <h1>Bridge Watchkeeping for Junior Officers</h1>
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
      <div className="bwkcourse-description">
        <p>
        This is a three-day course that covers open sea navigation, ECDIS and RADAR usage, Collision Regulations, fishing vessels and their limitations, pilot ladder basics, checklists, and bridge watchkeeping in a full mission simulator.
        </p>
        <br/>
        <p>
        The course provides practical tips and recommendations to improve basic ship handling watchkeeping at sea, and accident investigations of, open sea collisions are discussed to help participants understand where things go wrong.
        </p>
        <br/>
        <p>It aims to help junior officers gain confidence in watchkeeping and better support the Master.</p>
           <br/>
        <p>The course requires a minimum of 6 and a maximum of 12 participants.The course requires a minimum of 6 and a maximum of 12 participants.</p>
      </div>
      <Footer/>
    </>
  );
};


export default Bwk;
