import React from 'react';
import './Framo.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Framo = () => {
  return (
    <>
      <div className='Framo'>
        <Navbar />

        <div className="Framo-text">
          <h1>Framo Pump Operations and Maintenance</h1>
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
      <div className="framocourse-description">
        <p>
        This course is designed to familiarizes the participant with all aspects of the system and enables them to operate and maintain it safely and efficiently.
        </p>
        <br/>
        <p>
        The participants are exposed to the layout of the hydraulic circuit; explanation of the working of the power packs; oil cleanliness aspects and its importance; troubleshooting aspects -
        dealt with logically, systematically and in detail; the various safety features of the circuit - various alarms / trips and the emergency overrides.
        </p>
        <br/>
        <p>The working of centrifugal pumps, both in parallel and in series, are also covered along
        with the capacity curves for the pumps and their interpretation and use for optimal cargo discharge.</p>
           <br/>
        <p>Stripping operation, cargo pump performance evaluation curves, analysis of purging results
        and use of the emergency portable pumping equipment also form part of this course.</p>
        <br/>
        <p>The construction of the cargo pump is demonstrated in detail with SD-125 Model Cargo pump
         and replacement of Cargo seal, Wear Ring, Impeller, Mechanical Seal and Back stop unit alongwith
        Ceramic sleeve is demonstrated and due precautions are discussed at length.</p>
        <br/>
        <p>The videos detailing cargo pump maintenance and the operational aspects (loading /
          discharging / stripping / tank cleaning etc) are demonstrated with explainations.</p>
          <br/>
        <p>Finally, the participants are given the actual shipboard problems/case study and detail
        discussion in logical sequence to troubleshoot the STC malfunction.</p>
      </div>
      <Footer/>
    </>
  );
};


export default Framo;
