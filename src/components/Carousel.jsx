import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 3000); // Slide changes every 3 seconds
    return () => clearInterval(timer);
  }, [total]);

  return (
    <div className="carousel">
      <div className="carousel-wrapper">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide-container ${index === current ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay">
              <h3>{slide.text}</h3>
              <a href={slide.url} className="cta-button">{slide.buttonLabel}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
