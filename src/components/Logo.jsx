import logo from '../assets/logo.jpeg';

const Logo = () => {
  return (
    <div className="circleImage">
      <img 
        src={logo} 
        alt="Logo"
        width={150} 
        height={150}
      />
    </div>
  );
};

export default Logo;
