import { useNavigate } from 'react-router-dom';

const Terms = () => {

    const navigate = useNavigate();

    const handleButtonClick = () => {
      navigate('/contact');
    };

    return (
      <div className="text-left py-2">
        <div className="terms-card p-4">
          <h2 className="text-black text-xl">Terms</h2>
          <p className="text-black">In order to work with me you must:</p>
          <ul>
            <li>
              <span className="text-purple-600 hover:text-purple-600">
                Be Totally <span className="text-red-600">Awesome</span>
              </span>
            </li>
            <li>
              <span className="text-purple-600 hover:text-purple-600">
                Enjoy the <span className="text-red-600">LITTLE THINGS</span>
              </span>
            </li>
            <li>
              <span className="text-purple-600 hover:text-purple-600">
                Admit my terms are <span className="text-red-600">FUN</span> ... <span className="text-green-600">OR ELSE!</span>
              </span>
            </li>
          </ul>
          <div className="mt-4">
          <button
            onClick={handleButtonClick}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Got it!
          </button>
        </div>
        </div>
      </div>
    );
  };
  
  export default Terms;
  