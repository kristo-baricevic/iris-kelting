// Palette.js
import Circle from './Circle';
import { useState, useEffect, useRef } from 'react';

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

const Palette = () => {
  // Track the currently hovered color and the current index
  const [hoveredColor, setHoveredColor] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Preload all background images
  useEffect(() => {
    colors.forEach((colorObj) => {
      colorObj.images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    });
  }, []);

  // Update the body background image with a delay
  const updateBodyBackground = debounce((colorName, index) => {
    const colorObject = colors.find((c) => c.name === colorName);
    if (colorObject) {
      const backgroundImage = colorObject.images[index];
      document.body.style.transition = 'background-image 1s ease-in-out';
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';
    }
  }, 200); // Adjust the debounce delay if needed

  // Reset the body background image to its original state
  const resetBodyBackground = () => {
    // Clear any existing timeouts to avoid conflicting timers
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a timeout for the reset to occur after the transition
    timeoutRef.current = setTimeout(() => {
      document.body.style.transition = 'background-image 1s ease-in-out';
      document.body.style.backgroundImage = '';
    }, 200);
  };

  // Navigate to the previous photo
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

  // Navigate to the next photo
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
        <button onClick={handlePrevious} className="flex justify-center border-solid border-black border-2 px-4 py-2 bg-orange-400 hover:bg-orange-500 rounded-full shadow-md">
          &larr; Previous
        </button>
        <button onClick={handleNext} className="flex justify-center border-solid border-black border-2 px-4 py-2 bg-orange-400 hover:bg-orange-500 rounded-full shadow-md">
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Palette;
