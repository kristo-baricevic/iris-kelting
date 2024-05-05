import { useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';

// Placeholder image URLs or your actual image sources
const photos = [
  { color: 'red', src: 'https://via.placeholder.com/150/FF0000/FFFFFF?text=Photo1' },
  { color: 'green', src: 'https://via.placeholder.com/150/00FF00/FFFFFF?text=Photo2' },
  { color: 'blue', src: 'https://via.placeholder.com/150/0000FF/FFFFFF?text=Photo3' },
  { color: 'yellow', src: 'https://via.placeholder.com/150/FFFF00/FFFFFF?text=Photo4' },
  { color: 'orange', src: 'https://via.placeholder.com/150/FFA500/FFFFFF?text=Photo5' },
];

const preloadImages = (imageArray) => {
  imageArray.forEach((image) => {
    const img = new Image();
    img.src = image;
  });
};

const FloatingFrames = ({ color }) => {
  // Preload images once on initial mount
  useEffect(() => {
    const imageList = photos.map((photo) => photo.src);
    preloadImages(imageList);
  }, []);

  // GSAP animation for frames
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

  // Render the frames using photos data
  return (
    <div className="absolute inset-0 flex justify-center items-center z-10">
      {photos.map((photo, index) => (
        <div key={index} className="frame-container">
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
