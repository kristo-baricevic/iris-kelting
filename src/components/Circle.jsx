import { useState } from 'react';
import FloatingFrames from './FloatingFrames';
import PropTypes from 'prop-types';

const Circle = ({ color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
        className="flex flex-row w-16 h-16 rounded-full cursor-pointer"
        style={{    backgroundColor: color, 
            border: '3px solid red',  // Make the border red for visibility
            height: '64px',           // Ensure height is explicitly set
            width: '64px'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        
      {isHovered && <FloatingFrames color={color} />}
    </div>
  );
};

Circle.propTypes = {
    color: PropTypes.string.isRequired,
};

export default Circle;
