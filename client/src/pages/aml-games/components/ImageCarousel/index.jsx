import React, { useEffect, useState } from 'react';
import './style.css';

const ImageCarousel = ({ images = [], transcript }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState('next');

  useEffect(() => {
    if (images.length === 0) {
      console.warn('No images provided to ImageCarousel.');
    }
  }, [images]);

  const handlePrev = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setDirection('prev');
  };

  const handleNext = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setDirection('next');
  };

  if (images.length === 0) {
    return <div className="carousel-container">No images to display</div>;
  }

  return (
    <div>
      <div className="carousel-container">
        <button className="carousel-button left" onClick={handlePrev}>
          &lt;
        </button>
        <div className="carousel-image-container">
          <div className="carousel-header">{images[currentIndex].header}</div>
          <img
            src={images[prevIndex].src}
            alt={`Slide ${prevIndex}`}
            className={`carousel-image ${direction === 'next' ? 'slide-out-left' : 'slide-out-right'}`}
          />
          <img
            src={images[currentIndex].src}
            alt={`Slide ${currentIndex}`}
            className={`carousel-image ${direction === 'next' ? 'slide-in-right' : 'slide-in-left'}`}
          />
        </div>
        <button className="carousel-button right" onClick={handleNext}>
          &gt;
        </button>
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <div
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
            ></div>
          ))}
        </div>
        <div className="carousel-counter">
          {currentIndex + 1}/{images.length}
        </div>
      </div>
      <div className="divider-container">
        <div className="divider"></div>
        <div className="transcript-text">{transcript}</div>
      </div>
    </div>
  );
};

export default ImageCarousel;
