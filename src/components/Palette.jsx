import { useState, useEffect, useRef } from 'react';
import Circle from './Circle';
import { getTextColorForDynamicBackground } from '../utils/backgroundUtils';
import PropTypes from 'prop-types';

// Import your local images
import blue1 from '../assets/city_purple.jpeg';
import blue2 from '../assets/blue2.jpeg';
import blue3 from '../assets/blue3.jpeg';
import blue4 from '../assets/blue4.jpeg';
import yellow1 from '../assets/iris_butterfly.jpeg';
import yellow2 from '../assets/yellow2.jpeg';
import yellow3 from '../assets/yellow3.jpeg';
import yellow4 from '../assets/yellow4.jpeg';
import orange1 from '../assets/iris_orange.jpeg';
import orange2 from '../assets/orange2.jpeg';
import orange3 from '../assets/orange3.jpeg';
import red1 from '../assets/iris_red.jpeg';
import red2 from '../assets/red2.jpeg';
import red3 from '../assets/red3.jpeg';
import red4 from '../assets/red4.jpeg';
import green1 from '../assets/iris_green.jpeg';
import green2 from '../assets/green2.jpeg';
import green3 from '../assets/green3.jpeg';

// Colors and multiple images
const colors = [
  { name: 'red', images: [red1, red2, red3, red4] },
  { name: 'green', images: [green1, green2, green3] },
  { name: 'blue', images: [blue1, blue2, blue3, blue4] },
  { name: 'yellow', images: [yellow1, yellow2, yellow3, yellow4] },
  { name: 'orange', images: [orange1, orange2, orange3] },
];

// Debounce utility function
const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => func(...args), delay);
  };
};

const Palette = ({ setTextColor }) => {
  const [hoveredColor, setHoveredColor] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const overlay1Ref = useRef(null);
  const overlay2Ref = useRef(null);
  const [useOverlay1, setUseOverlay1] = useState(true);

  // Preload all background images
  useEffect(() => {
    colors.forEach((colorObj) => {
      colorObj.images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    });
  }, []);

  const updateBodyBackground = debounce((colorName, index) => {
    const colorObject = colors.find((c) => c.name === colorName);
    if (colorObject) {
      const backgroundImage = colorObject.images[index];
      if (useOverlay1) {
        if (overlay1Ref.current) {
          overlay1Ref.current.style.backgroundImage = `url(${backgroundImage})`;
          overlay1Ref.current.classList.add('overlay-visible');
          overlay2Ref.current.classList.remove('overlay-visible');
          // Check text color based on the new background image
          getTextColorForDynamicBackground(overlay1Ref.current, setTextColor);
        }
      } else {
        if (overlay2Ref.current) {
          overlay2Ref.current.style.backgroundImage = `url(${backgroundImage})`;
          overlay2Ref.current.classList.add('overlay-visible');
          overlay1Ref.current.classList.remove('overlay-visible');
          // Check text color based on the new background image
          getTextColorForDynamicBackground(overlay2Ref.current, setTextColor);
        }
      }
      setUseOverlay1(!useOverlay1);
    }
  }, 200);

  const handlePrevious = debounce(() => {
    if (hoveredColor) {
      const colorObj = colors.find((c) => c.name === hoveredColor);
      if (colorObj) {
        const newIndex = (currentIndex - 1 + colorObj.images.length) % colorObj.images.length;
        setCurrentIndex(newIndex);
        updateBodyBackground(hoveredColor, newIndex);
      }
    }
  }, 200);

  const handleNext = debounce(() => {
    if (hoveredColor) {
      const colorObj = colors.find((c) => c.name === hoveredColor);
      if (colorObj) {
        const newIndex = (currentIndex + 1) % colorObj.images.length;
        setCurrentIndex(newIndex);
        updateBodyBackground(hoveredColor, newIndex);
      }
    }
  }, 200);

  return (
    <div className="flex flex-col justify-center gap-6 py-2">
      <div ref={overlay1Ref} className="background-overlay"></div>
      <div ref={overlay2Ref} className="background-overlay"></div>
      {colors.map((colorObj, index) => (
        <Circle
          key={index}
          color={colorObj.name}
          onHover={() => {
            setHoveredColor(colorObj.name);
            setCurrentIndex(0);
            updateBodyBackground(colorObj.name, 0);
          }}
        />
      ))}
      <div className="flex justify-center align-middle mt-4 gap-6">
        <button
          onClick={handlePrevious}
          style={{
            backgroundColor: hoveredColor || "orange",
            transition: "background-color 0.5s ease-in-out, border-color 0.5s ease-in-out",
            border: "2px solid black",
          }}
          className="flex justify-center px-4 py-2 hover:opacity-80 rounded-full shadow-md text-black"
        >
          &larr; Previous
        </button>
        <button
          onClick={handleNext}
          style={{
            backgroundColor: hoveredColor || "orange",
            transition: "background-color 0.5s ease-in-out, border-color 0.5s ease-in-out",
            border: "2px solid black",
          }}
          className="flex justify-center px-4 py-2 hover:opacity-80 rounded-full shadow-md text-black"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

Palette.propTypes = {
  setTextColor: PropTypes.string.isRequired
};

export default Palette;
