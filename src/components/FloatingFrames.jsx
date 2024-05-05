import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

// Import your local images
import background1 from '../assets/city_purple.jpeg';
import background2 from '../assets/iris_butterfly.jpeg';
import background3 from '../assets/iris_orange.jpeg';
import background4 from '../assets/iris_red.jpeg';
import background5 from '../assets/iris_green.jpeg';

const preloadImages = (imageArray) => {
    imageArray.forEach(image => {
      const img = new Image();
      img.src = image;
    });
}; 

const FloatingFrames = () => {
  // Background images mapping
  const backgroundImages = {
    red: background4,
    green: background5,
    blue: background1,
    yellow: background2,
    orange: background3,
  };

  // Store the original body background
  const originalBackground = useRef(document.body.style.backgroundImage);

  // Change the body background image
  const changeBodyBackground = (bgImage) => {
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.transition = 'background-image 1s ease-in-out';
  };

  // Reset the body background to its original value
  const resetBodyBackground = () => {
    document.body.style.backgroundImage = originalBackground.current;
  };

  useEffect(() => {
    const imageList = [background1, background2, background3, background4, background5];
    preloadImages(imageList);
  }, []);
  

  // Animation to move frames upwards from bottom to top
  useEffect(() => {
    gsap.fromTo(
      '.frame',
      {
        y: window.innerHeight + 100,
        x: () => window.innerWidth / 2 - 100 + (Math.random() * 50 - 25),
        scale: 1,
        opacity: 0,
      },
      {
        duration: 6,
        y: -100,
        opacity: 1,
        ease: 'power1.inOut',
        stagger: {
          each: 0.8,
          repeat: -1,
          yoyo: false,
        },
      }
    );
  }, []);

  // Photos with associated colors
  const photos = [
    { color: 'red', src: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Photo1' },
    { color: 'green', src: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Photo2' },
    { color: 'blue', src: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Photo3' },
    { color: 'yellow', src: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Photo4' },
    { color: 'orange', src: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Photo5' },
  ];

  return (
    <div className="absolute inset-0 flex justify-center items-center z-10">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="frame-container"
          onMouseEnter={() => changeBodyBackground(backgroundImages[photo.color])}
          onMouseLeave={resetBodyBackground}
        >
          <img
            src={photo.src}
            alt={`Photo ${index + 1}`}
            className="frame shadow-md mx-1 w-16 h-16 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

FloatingFrames.propTypes = {
  color: PropTypes.string.isRequired,
};

export default FloatingFrames;
