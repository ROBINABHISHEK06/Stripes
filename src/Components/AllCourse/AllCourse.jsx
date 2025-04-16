import React, { useEffect, useRef } from 'react';
import './AllCourse.css';
import course from '../../assets/rolebased.jpg';
import course_1 from '../../assets/courses_1.png';
import course_2 from '../../assets/shipcourse.png';
import course_3 from '../../assets/bridgecourse.png';
import course_4 from '../../assets/shiptoship.png';
import course_5 from '../../assets/bridgeteam.bmp';
import course_6 from '../../assets/framo.png';
import course_7 from '../../assets/EEAC.png';
import { Link } from 'react-router-dom';


const AllCourse = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add 'animate' class to all program cards when container is in view
            cardRefs.current.forEach((ref) => {
              if (ref) ref.classList.add('animate');
            });
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 20% of the container is visible
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

  const allcourses = [
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
    <div className='allcourses-container' ref={containerRef}>
      <div className='allcourses'>
        {allcourses.map((program, index) => (
          <div
            className='allcourse-card'
            key={index}
            ref={(el) => (cardRefs.current[index] = el)}
          >
            <img src={program.image} alt={program.title} />
            <h3>{program.title}</h3>
            <Link to={program.link}>
              <button>Learn More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourse;
