import PropTypes from 'prop-types';

const PhotoScroller = ({photo}) => {
  
  return (
    <div className="flex flex-col justify-center align-middle py-2">
      <div className="max-w-md flex justify-center align-middle modeling-card p-4">
          <img 
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
