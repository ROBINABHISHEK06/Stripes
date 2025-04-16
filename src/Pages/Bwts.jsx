import React from 'react';
import './Btrm.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Btrm = () => {
  return (
    <>
      <div className='btrm'>
        <Navbar />

        <div className="btrm-text">
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
      <div className="bwtscourse-description">
        <p>
         This course is 5 days and complies with the requirements of STCW Table A-II/1, Table A-II/2 & A-III/2,
          Table A-II/1, Table A-III/1, and Table A-III/6. It covers resource management, role-based bridge principles,
           defining roles on the bridge, and how RBB promotes communication and teamwork.
        </p>
        <br/>
        <p>
        The Role-Based Bridge introduces a novel method for enhancing resource management and communication on board.
         Rarely do navigational accidents at sea result from inadequate skill or knowledge. Instead, investigations 
         frequently reveal a bridge team lacking cohesion, with one individual monopolizing decision-making. 
         The Role-Based Bridge serves as a remedy for errors stemming from single-person dominance. Currently, 
         Stripes Academy stands as the sole institute in Asia providing this course
        </p>
        <br/>
        <p>The course includes accident investigations, role-plays, animated presentations, videos, polls, and pre-course quizzes.
           Realistic scenarios are created in the simulator, and an in-house psychologist provides behavioral feedback.</p>
           <br/>
        <p>Each participant receives a comprehensive evaluation report and an individual 
          debrief highlighting their strengths and areas for improvement.</p>
      </div>
      <Footer/>
    </>
  );
};


export default Btrm;
