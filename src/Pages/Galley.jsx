import React, { useState, useEffect } from "react";
import "./Gallery.css";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

// Image imports
import campus from "../assets/campus.jpg";
import view from "../assets/View.jpeg";
import EEAC from "../assets/EEAC.png";
import gallery_4 from "../assets/gallery_4.png";
import gallery_11 from "../assets/gallery_11.png";
import img7 from "../assets/img7.png";
import gallery15 from "../assets/galley_15.png";
import img3 from "../assets/img3.png";
import img6 from "../assets/img6.png";
import manilan from "../assets/manilasinm.jpeg";
import bwtsmhw from "../assets/bwtsmhw.jpeg";

// Image array
const images = [campus, view, EEAC, gallery_4, gallery_11, gallery15, img7, img3, img6,manilan,bwtsmhw];

const Gallery = () => {
  return (
    <>
      <Navbar />
      <div className="gallery-container">
        {images.map((src, index) => (
          <div key={index} className={`gallery-item ${[0, 3, 6].includes(index) ? "large" : ""}`}>
            <img src={src} alt={`Gallery ${index}`} loading="lazy" />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
};

export default Gallery;
