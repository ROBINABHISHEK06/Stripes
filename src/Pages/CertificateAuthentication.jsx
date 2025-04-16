import React from "react";
import "./CertificateAuthentication.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const CertificateAuthentication = () => {
  return (
    <>
    <Navbar/>
    <div className="certificate-container">
      <div className="certificate-card">
        <h2 className="certificate-title">Certificate <br/> Authentication</h2>

        <div className="certificate-form-row">
          <label className="certificate-label">Enter Your Name:</label>
          <input type="text" placeholder="Your Name" className="certificate-input" />
        </div>

        <div className="certificate-form-row">
          <label className="certificate-label">STRIPES</label>
          <div className="certificate-sub-group">
            <select className="certificate-dropdown">
              <option>BTRM</option>
              <option>BWK</option>
              <option>MHW</option>
            </select>
            <input type="text" placeholder="Enter Num" className="certificate-number-input" />
          </div>
        </div>

        <div className="certificate-button-container">
          <button className="certificate-verify-button">VERIFY</button>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CertificateAuthentication;
