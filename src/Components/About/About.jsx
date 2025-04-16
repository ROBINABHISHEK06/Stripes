import React from 'react';
import './About.css';
import View from '../../assets/View.jpeg';

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={View} alt='Stripes Campus' className='about-img' />
      </div>
      <div className='about-right'>
        {/* <h3>ABOUT US</h3> */}
        {/* <h2>Experience. Educate. Evolve</h2> */}
        <p>
          At Stripes, we aim to forge a symbiotic relationship between training and performance. Our cutting-edge teaching methodologies serve as a bridge, seamlessly connecting theory to practice and enhancing knowledge transfer.
          Established in 2023, our institute, strategically located just 15 minutes from the Mumbai International Airport, boasts a tranquil campus that fosters an optimal learning environment away from the city's hustle and bustle.
          With state-of-the-art facilities and conference-style classrooms, we ensure a personalized learning experience. The open-air cafeteria offers a delightful space for relaxation during breaks.
        </p>
        <p>
          Our greatest asset is our team of highly qualified trainers, renowned in maritime training, complemented by an in-house psychologist providing valuable feedback to participants.
          To deliver an immersive learning experience, we proudly house India's largest Full Mission Navigation Simulator by ARI. Embracing a customized approach, we collaborate with partners to tailor courses to their unique needs.
          We are confident that our innovative and rewarding training programs will propel you toward your goals. Thank you for considering Stripes Institute; we eagerly anticipate supporting you in your journey.
        </p>
      </div>
    </div>
  );
};

export default About;
