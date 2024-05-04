import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div>
      <Link to="/">Photography </Link>
      <Link to="/about">Modeling </Link>
      <Link to="/services">Video </Link>
      <Link to="/contact">Services </Link>
    </div>
  );
};

export default MenuBar;
