import React, { useEffect, useRef } from 'react';
import './Programs.css';
import course from '../../assets/rolebased.jpg';
import course_1 from '../../assets/courses_1.png';
import course_2 from '../../assets/shipcourse.png';
import course_3 from '../../assets/bridgecourse.png';
import course_4 from '../../assets/shiptoship.png';
import course_5 from '../../assets/bridgeteam.bmp';
import course_6 from '../../assets/framo.png';
import course_7 from '../../assets/EEAC.png';
import { useNavigate } from 'react-router-dom';

const Programs = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cardRefs.current.forEach((ref) => {
              if (ref) ref.classList.add('animate');
            });
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the container is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const programs = [
    { image: course, title: "The Role-Based Bridge", link: "/btrm" },
    { image: course_1, title: "Ship Simulator and Bridge Teamwork", link: "/ssbt" },
    { image: course_2, title: "Shipmasters Command and Leadership Evaluation", link: "/scale" },
    { image: course_3, title: "Bridge Watchkeeping for Junior Officers", link: "/bwk" },
    { image: course_4, title: "Ship-Ship Transfer Navigational Training", link: "/sts" },
    { image: course_5, title: "Large Vessel Manoeuvring", link: "/lvm" },
    { image: course_6, title: "Framo Pump Operations and Maintenance", link: "/framo" },
    { image: course_7, title: "Electrical, Electronics, and Automation Course", link: "/eeac" },
  ];

  return (
    <div className='programs-container' ref={containerRef}>
      <div className='programs'>
        {programs.map((program, index) => (
          <div
            className='program-card'
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <img src={program.image} alt={program.title} />
            <h3>{program.title}</h3>
            <button onClick={() => {
              navigate(program.link);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              Learn More
            </button>
          </div>
        ))}
      </div>
      <div className='all-courses-btn'>
        <button onClick={() => {
          navigate('/course');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}>
          EXPLORE COURSES
        </button>
      </div>
    </div>
  );
};

export default Programs;
