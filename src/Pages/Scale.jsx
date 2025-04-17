import React from 'react';
import './Scale.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Scale = () => {
  return (
    <>
      <div className='Scale'>
        <Navbar />

        <div className="Scale-text">
          <h1>Shipmasters Command and Leadership Evaluation</h1>
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
            <strong>3 Days</strong>
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
      <div className="scalecourse-description">
        <p>
        This is a 3-day evaluation course to assess Chief Mates' readiness for promotion to Master. The course includes online quizzes, communication skills analysis, and full mission simulator exercises covering various scenarios.
        </p>
        <br/>
        <p>
        The quizzes and simulator exercises test participants' understanding of ship handling and their ability to perform under stressful conditions.
        </p>
        <br/>
        <p>An in-house psychologist provides behavioral feedback during the simulator exercises.
        </p>
           <br/>
        <p>Each participant receives a comprehensive evaluation report and individual debriefing. </p>
        <br/>
        <p>The course requires a minimum of 4 and a maximum of 6 participants.</p>
      </div>
      <Footer/>
    </>
  );
};


export default Scale;
