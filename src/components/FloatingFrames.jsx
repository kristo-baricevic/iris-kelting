import { useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
  
const FloatingFrames = ({ color }) => {
  useEffect(() => {
    // Animation to move frames across the screen
    gsap.fromTo(
      '.frame',
      {
        x: () => Math.random() * window.innerWidth,
        y: () => Math.random() * window.innerHeight,
        scale: 0,
        opacity: 0,
      },
      {
        duration: 3,
        x: () => Math.random() * window.innerWidth,
        y: () => Math.random() * window.innerHeight,
        scale: 1,
        opacity: 1,
        ease: 'power1.inOut',
        stagger: {
          each: 0.5,
          repeat: -1,
          yoyo: true,
        },
      }
    );
  }, []);

  // Static array of photos for demonstration
  const photos = [...Array(5)].map((_, index) => `https://via.placeholder.com/150/${color.slice(1)}/FFFFFF?text=Photo${index + 1}`);

  return (
    <div className="absolute top-0 left-0 z-10 p-4">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className="frame rounded-full shadow-md mx-1"
        />
      ))}
    </div>
  );
};

FloatingFrames.propTypes = {
    color: PropTypes.string.isRequired,
};

export default FloatingFrames;
