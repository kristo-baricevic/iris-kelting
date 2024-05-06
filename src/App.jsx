import { useState, useEffect } from 'react';
import MenuBar from './components/MenuBar';
import Palette from './components/Palette';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { getTextColorForDynamicBackground } from './utils/backgroundUtils';

function App() {
  // State variable to store the dynamic text color
  const [textColor, setTextColor] = useState("white");

  // Function to update the text color based on the background image
  const updateTextColor = () => {
    // Add a slight delay to ensure the background image has fully loaded
    setTimeout(() => {
      getTextColorForDynamicBackground((color) => {
        setTextColor(color);
      });
    }, 100); // Adjust this delay as necessary
  };

  // Effect to update the text color initially or when the background changes
  useEffect(() => {
    updateTextColor();
    // Optionally, add a listener to detect changes to the background if dynamically changed
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "style") {
          updateTextColor();
        }
      }
    });

    // Observe style changes in the body's attributes
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });

    // Cleanup observer when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div
        className="flex flex-col"
        style={{
          color: textColor,
          transition: "color 0.5s ease-in-out" 
        }}
      >
        <h1 className="text-left text-5xl font-extrabold">Iris Kelting</h1>
        <MenuBar />
        <Palette />
      </div>
    </Router>
  );
}

export default App;
