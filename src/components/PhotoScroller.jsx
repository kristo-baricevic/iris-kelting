import PropTypes from 'prop-types';

const PhotoScroller = ({photo}) => {
  
  return (
    <div className="flex flex-col justify-center align-middle py-4">
      <div className="max-w-md flex justify-center align-middle modeling-card pattern-4 p-4">
          <img 
            className="modelingImage"
            src={photo} 
            alt="photo"
          />
      </div>
    </div>
  );
};

PhotoScroller.propTypes = {
  photo: PropTypes.string.isRequired
};

export default PhotoScroller;
