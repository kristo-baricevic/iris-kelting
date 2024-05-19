import { useEffect } from 'react';
import PhotoScroller from './PhotoScroller';

import orange1 from '../assets/iris_orange.jpeg';
import iris_earth from '../assets/iris_earth.png';
import iris_green from '../assets/iris_green.jpeg';
import iris_red from '../assets/iris_red.jpeg';

const ModelingPortfolio = () => {

  useEffect(() => {
    document.body.classList.add('pattern-1');
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-white text-xl font-bold font-sans">Modeling Portfolio</h2>
      </div>
      <div className="flex flex-col items-center justify-center py-2">
        <PhotoScroller photo={orange1}/>
        <PhotoScroller photo={iris_earth}/>
        <PhotoScroller photo={iris_green}/>
        <PhotoScroller photo={iris_red}/>
      </div>
    </div>
  );
};

export default ModelingPortfolio;
