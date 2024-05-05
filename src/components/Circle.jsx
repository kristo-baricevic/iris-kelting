import { useState } from 'react';
import FloatingFrames from './FloatingFrames';
import PropTypes from 'prop-types';

const Circle = ({ color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
        className="flex flex-row w-16 h-16 rounded-full cursor-pointer"
        style={{    backgroundColor: color, 
            border: '1px solid black', 
            height: '64px',           
            width: '64px',
            boxShadow: '0px 0px 5px 0px black',
            transition: 'all 0.2s ease-in-out',
            transform: isHovered? 'translateY(-10%)' : 'translateY(0%)',
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
