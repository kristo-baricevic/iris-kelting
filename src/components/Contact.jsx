import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
        <div className="text-left py-2">
        <Link to="/">Home </Link>
        </div>
        <div>
            <h2>Contact</h2>
        </div>
    </div>
  );
};

export default Contact;
