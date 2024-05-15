import React, { useState, useEffect } from 'react';
import './Slider.css'; // Import CSS file for styling

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 2000); // Change slide every 2 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]); // Re-run effect when currentIndex changes

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <button className="next" onClick={nextSlide}>&#10095;</button>
      <div className="slider-content">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentIndex ? 'slide active' : 'slide'}
            style={{
              transform: `translateX(${-100 * currentIndex}%)`, // Adjust slide position based on currentIndex
              backgroundImage: `url(${image})`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
