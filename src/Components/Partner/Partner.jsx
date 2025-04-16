import React from 'react';
import './Partner.css';
import gallery_1 from '../../assets/Scorpio.png';
import gallery_2 from '../../assets/valles.jpeg';
import gallery_3 from '../../assets/Pacificbasin.png';
import gallery_4 from '../../assets/torm.svg';
import gallery_5 from '../../assets/zenith.png';
import gallery_6 from '../../assets/seaspan.svg';
import gallery_7 from '../../assets/greateasten.png';

const images = [
  gallery_1, gallery_2, gallery_3, gallery_4, 
  gallery_5, gallery_6, gallery_7
];

const Campus = () => {
  return (
    <div className='partner'>
      <div className='partnergallery'>
        {/* Duplicate images for seamless scrolling */}
        {[...images, ...images].map((image, index) => (
          <img key={index} src={image} alt={`Partner ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Campus;
