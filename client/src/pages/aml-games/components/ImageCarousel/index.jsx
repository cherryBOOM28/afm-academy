import React, { useEffect, useState } from 'react';
import './style.css';
<<<<<<< HEAD
=======

>>>>>>> da9d31865f56db13f9a7f7abd148e15c23c4d7bd
const ImageCarousel = ({ images = [], transcript }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState('next');
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (images.length === 0) {
      console.warn('No images provided to ImageCarousel.');
    }
  }, [images]);

  const handlePrev = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setDirection('prev');
    setAnimationKey((prevKey) => prevKey + 1); // Force re-render for animation reset
  };

  const handleNext = () => {
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setDirection('next');
    setAnimationKey((prevKey) => prevKey + 1); // Force re-render for animation reset
  };

  if (images.length === 0) {
    return <div className="carousel-container">No images to display</div>;
  }

  return (
<<<<<<< HEAD
    <div className="carousel-wrapper">
      <div className="carousel-header">{images[currentIndex].header}</div>
=======
    <div>
>>>>>>> da9d31865f56db13f9a7f7abd148e15c23c4d7bd
      <div className="carousel-container">
        <button className="carousel-button left" onClick={handlePrev}>
          &lt;
        </button>
<<<<<<< HEAD
        <div className="carousel-image-container" key={animationKey}>
=======
        <div className="carousel-image-container">
          <div className="carousel-header">{images[currentIndex].header}</div>
>>>>>>> da9d31865f56db13f9a7f7abd148e15c23c4d7bd
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
<<<<<<< HEAD
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      <div className="carousel-divider">
        <span>Транскрипт</span>
      </div>
      <div className="carousel-transcript">
        {transcript}
=======
          {currentIndex + 1}/{images.length}
        </div>
      </div>
      <div className="divider-container">
        <div className="divider"></div>
        <div className="transcript-text">{transcript}</div>
>>>>>>> da9d31865f56db13f9a7f7abd148e15c23c4d7bd
      </div>
    </div>
  );
};

export default ImageCarousel;
