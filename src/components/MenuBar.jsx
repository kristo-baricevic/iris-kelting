import { Link } from 'react-router-dom';

const MenuBar = () => {
  return (
    <div className="text-left py-2">
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/video">Video </Link>
      <Link to="/modeling">Modeling </Link>
      <Link to="/contact">Contact </Link>
    </div>
  );
};

export default MenuBar;
