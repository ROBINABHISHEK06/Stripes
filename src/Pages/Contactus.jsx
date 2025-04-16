import React from "react";
import "./ContactUs.css"; // Import external CSS
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; 

const ContactUs = () => {
  return (
    <>
    <Navbar/>
    <div className="contact-container">
      <div className="contact-left">
        <h2>Contact Us</h2>
        <p>
          We are an industry-leading company that values honesty, integrity, and efficiency.
          Building quality products and caring.
        </p>
      </div>

      <div className="contact-right">
        <div className="contact-form">
          <h3>Say Hello!</h3>
          <p>Feel free to stop by and say hi !</p>
          <form>
            <div className="form-group">
              <input type="text" placeholder="First Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Phone Number" />
            </div>
            <textarea placeholder="Message"></textarea>
            <button className="submitbtn" type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
    <div className="leftind-container">
        <div className="leftind-box">
          <h2>Contact Us India</h2>
          <p className="leftind-subtext">
            Let us know your queries, feedbacks and enquiries. We are here to support you 24/7.
          </p>

          <div className="leftind-item">
            <FaPhoneAlt className="leftind-icon" />
            <div>
              <h4>Give us a call</h4>
              <p className="leftind-highlight">022 4749 9225</p>
            </div>
          </div>

          <div className="leftind-item">
            <FaEnvelope className="leftind-icon" />
            <div>
              <h4>Write to us</h4>
              <p className="leftind-highlight">training@stripesacademy.net</p>
            </div>
          </div>

          <div className="leftind-item">
            <FaMapMarkerAlt className="leftind-icon" />
            <div>
              <h4>Visit us in Mumbai @</h4>
              <p className="leftind-highlight">
              St. Xavier's Campus Shilpalaya, Vinayalaya Mahakali Caves Road
               Behind Holy Family Church Mumbai 400 093, INDIA
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="leftph-container">
        <div className="leftph-box">
          <h2>Contact Us Philippines </h2>
          <p className="leftph-subtext">
            Let us know your queries, feedbacks and enquiries. We are here to support you 24/7.
          </p>

          <div className="leftph-item">
            <FaPhoneAlt className="leftph-icon" />
            <div>
              <h4>Give us a call</h4>
              <p className="leftph-highlight">6380085196</p>
            </div>
          </div>

          <div className="leftph-item">
            <FaEnvelope className="leftph-icon" />
            <div>
              <h4>Write to us</h4>
              <p className="leftph-highlight">trainingph@stripesacademy.net</p>
            </div>
          </div>

          <div className="leftph-item">
            <FaMapMarkerAlt className="leftph-icon" />
            <div>
              <h4>Visit us in Manila @</h4>
              <p className="leftph-highlight">
              Stripes Academy - Manila, Unit 1512, 1515, 1516 & 1517 - 15th Floor Trium Square Building Sen.
               Gil Sen. Gil Puyat Avenue, corner Leveriza, Pasay, 1300 Metro Manila, Philippines
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactUs;
