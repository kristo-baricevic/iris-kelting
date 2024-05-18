import Logo from './Logo';
import logo from '../assets/logo.jpeg';
import { useEffect } from 'react';


const About = () => {

  useEffect(() => {
    // document.body.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
    // document.body.style.backgroundRepeat = "no-repeat";
    // document.body.style.backgroundSize = "5% 5%";
    // document.body.style.backgroundPosition = "top left, top right, bottom left, bottom right";
    document.body.style.backgroundColor = "#FFB347";
    document.body.classList.add("pattern-2");
  }, []);
  

  return (
    <div>
        <div className="text-left py-2">
          <div className="about-card p-4">
              <h2 className="text-black text-xl">About</h2>
              <p className="text-black">
                Iris Kelting is an artist based out of Chicago, IL.
                She is a freelance illustrator, photographer, videographer and model.
                She can be found at <a href="https://www.instagram.com/iris.kelting/" target="_blank" rel="noreferrer"><span className="text-purple-400 hover:text-purple-600">Iris Kelting</span></a>.
              </p>
              <br />
              <p className="text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <br />
              <p className="text-black">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida.
            </p>
            <div className="flex justify-center py-2">
            <Logo image={logo}/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default About;
