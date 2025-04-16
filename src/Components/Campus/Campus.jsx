import React from 'react';
import './Campus.css';
import gallery_1 from '../../assets/stripes.jpg';
import gallery_2 from '../../assets/gallery_2.jpg';
import gallery from '../../assets/galley_15.png';
import gallery_4 from '../../assets/img7.png';
import { useNavigate } from 'react-router-dom';

const Campus = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate('/gallery');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='campus'>
      <div className='gallery'>
        <img src={gallery_1} alt="Gallery Image 1" />
        <img src={gallery_2} alt="Gallery Image 2" />
        <img src={gallery} alt="Gallery Image 3" />
        <img src={gallery_4} alt="Gallery Image 4" />
      </div>
      <button className='view-more-btn' onClick={handleViewMore}>
        View More
      </button>
    </div>
  );
};

export default Campus;
