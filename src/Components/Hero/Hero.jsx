import React, { useState, useEffect } from 'react';
import './Hero.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const words = ['Experience', 'Educate', 'Evolve'];
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const currentWord = words[index];
    let timeout;

    if (isDeleting) {
      // Backspacing effect
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, 100);
      if (displayedText === '') {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % words.length); // Switch words
      }
    } else {
      // Typing effect
      timeout = setTimeout(() => {
        setDisplayedText((prev) => currentWord.slice(0, prev.length + 1));
      }, 150);
      if (displayedText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500); // Wait before backspacing
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, index, words]);

  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1> Welcome to Stripes</h1><h2>...where training meets perfomance{' '}
          <span className="changing-word">
            <span className="blue-text">{displayedText}</span>
            <span className="cursor">|</span>
          </span>
        </h2>
        <button className='btn'onClick={() => navigate('/course')}>Find The Course</button>
      </div>
    </div>
  );
};

export default Hero;
