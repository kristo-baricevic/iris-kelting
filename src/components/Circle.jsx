// Circle.js
import PropTypes from 'prop-types';

const Circle = ({ color, onHover, onLeave }) => {
  return (
    <div
      className="flex flex-row w-16 h-16 rounded-full cursor-pointer"
      style={{
        backgroundColor: color,
        border: '1px solid black',
        boxShadow: '0px 0px 5px 0px black',
        transition: 'all 0.2s ease-in-out',
      }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    />
  );
};

Circle.propTypes = {
  color: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
};

export default Circle;
