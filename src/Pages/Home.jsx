import React, { useRef } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import Campus from '../Components/Campus/Campus';
import Testimonials from '../Components/Testimonials/Testimonials';
import Partner from '../Components/Partner/Partner';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import Lms from '../Components/Lms/Lms';
import Title from '../Components/Title/Title';
import Programs from '../Components/Programs/Programs';
import ContactFooter from '../Components/Contactfooter/Contactfooter';
import Powered from '../Components/Powered/Powered';

const Home = () => {
  const aboutRef = useRef(null);

  return (
    <>
      <Navbar aboutRef={aboutRef} />
      <Hero />
      <div ref={aboutRef}>
      <Title subTitle="About Us" title="Experience. Educate. Evolve" />
        <About />
      </div>
      <Lms />
      <Title subTitle="Popular Courses" title="Deck & Engine Course" />
      <Programs />
      <Title subTitle="Our Gallery" title="Campus Photo" />
      <Campus />
      <Title title="STUDENT REVIEW" />
      <Testimonials />
      <Title title="OUR TRAINING PARTNER" />
      <Partner />
      <ContactFooter />
      <Footer />
      <Powered />
    </>
  );
};

export default Home;
