import React from 'react';
import './Sts.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Sts = () => {
  return (
    <>
      <div className='Sts'>
        <Navbar />

        <div className="Sts-text">
          <h1>Ship-Ship Transfer Navigational Training</h1>
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
      <div className="stscourse-description">
        <p>
        This course is 2 days long and covers STS checklists, hydrodynamics for ship handling
        in close quarters, and choosing operation locations based on winds and weather effects.
        </p>
        {/* <br/> */}
        <p>
        The training uses STS software in a Full Mission Simulator.
        </p>
        {/* <br/> */}
        <p>It requires a minimum of 4 and a maximum of 8 participants.</p>
      </div>
      <Footer/>
    </>
  );
};


export default Sts;
