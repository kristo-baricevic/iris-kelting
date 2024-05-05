import { useEffect } from 'react';
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
  // Map of background images associated with circle colors
  const backgroundImages = {
    red: background4,
    green: background5,
    blue: background1,
    yellow: background2,
    orange: background3,
  };

  // Function to change the background image of the body
  const changeBodyBackground = (bgImage) => {
    document.body.style.backgroundImage = `url(${bgImage})`;
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.transition = 'background-image 1s ease-in-out';
  };

  // Preload background images
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
    { color: 'red', src: background4 },
    { color: 'green', src: background5 },
    { color: 'blue', src: background1 },
    { color: 'yellow', src: background2 },
    { color: 'orange', src: background3 },
  ];

  return (
    <div className="absolute inset-0 flex justify-center items-center z-10">
      {photos.map((photo, index) => (
        <div
          key={index} 
          className="frame-container"
          onMouseEnter={() => changeBodyBackground(backgroundImages[photo.color])}
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
