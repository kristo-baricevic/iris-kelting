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

export default Logo;

Logo.propTypes = {
    image: Logo.string.isRequired
  }