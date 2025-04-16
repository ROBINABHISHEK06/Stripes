import React from "react";
import "./Lms.css"; // Import the CSS file
import lms from '../../assets/lms.jpg';

const Lms = () => {
  return (
    <div className="lmscontainer">
      <div className="lmscontent">
        <h2>Unlock Your Learning Potential with Stripes Academy eLearning.</h2>
        <p>
          Join our online learning community, log in to your account, and start
          exploring a wide range of courses anytime, anywhere. Whether you're a
          beginner or an expert, our courses are designed to help you grow and
          achieve your goals.
        </p>
        <p>
          Simply log in and start learning from your laptop, tablet, or mobile.
          With interactive lessons and expert guidance, you can learn at your
          own pace and take your skills to the next level.
        </p>
        <div className="linkb">
          <button>Click</button>
        </div>
      </div>

      <div className="images">
        <img src={lms} className="first-image" alt="eLearning" />
      </div>
    </div>
  );
};

export default Lms;
