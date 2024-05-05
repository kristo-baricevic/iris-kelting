import { useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

const FloatingFrames = ({ color }) => {
  useEffect(() => {
    // Animation to move frames upwards from bottom to top
    gsap.fromTo(
      '.frame',
      {
        y: window.innerHeight + 100, // Start just below the bottom of the screen
        x: () => window.innerWidth / 2 - 200 + (Math.random() * 100 - 50), // Narrower scatter range centered
        scale: 1,
        opacity: 0,
      },
      {
        duration: 5.5, // Slow movement upwards
        y: -180, // Move off the top of the screen
        opacity: 1,
        ease: 'power1.inOut',
        stagger: {
          each: 0.8, // Delay between each frame
          repeat: -1, // Infinite loop
          yoyo: false, // Frames will return to their starting position
        },
      }
    );
  }, []);

  // Static array of photos for demonstration
  const photos = [...Array(5)].map(
    (_, index) => `https://via.placeholder.com/150/${color.slice(1)}/FFFFFF?text=Photo${index + 1}`
  );

  return (
    <div className="absolute bottom-0 left-0 right-0 z-10 flex justify-center p-4">
      {photos.map((photo, index) => (
        <img
          key={index}
          src={photo}
          alt={`Photo ${index + 1}`}
          className="frame shadow-md mx-1 object-cover"
        />
      ))}
    </div>
  );
};

FloatingFrames.propTypes = {
  color: PropTypes.string.isRequired,
};

export default FloatingFrames;
