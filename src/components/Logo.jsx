import PropTypes from 'prop-types';

const Logo = ({image}) => {
  return (
    <div className="circleImage">
      <img 
        src={image} 
        alt="Logo"
        width={150} 
        height={150}
      />
    </div>
  );
};

Logo.propTypes = {
    image: PropTypes.string.isRequired
  };

export default Logo;

