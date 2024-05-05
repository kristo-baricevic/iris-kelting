// Palette.js
import Circle from './Circle';
import { useState } from 'react';

// Import your local images
import blue_bg from '../assets/city_purple.jpeg';
import yellow_bg from '../assets/iris_butterfly.jpeg';
import orange_bg from '../assets/iris_orange.jpeg';
import red_bg from '../assets/iris_red.jpeg';
import green_bg from '../assets/iris_green.jpeg';

// Colors to be used in the Palette component
const colors = [
  { name: 'red', image: red_bg },
  { name: 'green', image: green_bg },
  { name: 'blue', image: blue_bg },
  { name: 'yellow', image: yellow_bg },
  { name: 'orange', image: orange_bg },
];

const Palette = () => {
  // Track the color currently being hovered over
  const [hoveredColor, setHoveredColor] = useState(null);

  // Update the body background image
  const updateBodyBackground = (colorName) => {
    const colorObject = colors.find((c) => c.name === colorName);
    console.log(hoveredColor);
    if (colorObject) {
      const backgroundImage = colorObject.image;
      document.body.style.transition = 'background-image 1s ease-in-out';
      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
    }
  };

  // Reset the body background image to its original state
  const resetBodyBackground = () => {
    document.body.style.transition = 'background-image 1s ease-in-out';
    document.body.style.backgroundImage = '';
  };

  return (
    <div className="flex flex-col justify-center gap-6 py-2">
      {colors.map((colorObj, index) => (
        <Circle
          key={index}
          color={colorObj.name}
          onHover={() => {
            setHoveredColor(colorObj.name);
            updateBodyBackground(colorObj.name);
          }}
          onLeave={resetBodyBackground}
        />
      ))}
    </div>
  );
};

export default Palette;
