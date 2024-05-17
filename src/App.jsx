import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Palette from './components/Palette';
import About from './components/About';
import Video from './components/Video';
import Contact from './components/Contact';
import './App.css';
import { getTextColorForDynamicBackground } from './utils/backgroundUtils';

function App() {
  const [textColor, setTextColor] = useState("white");

  const updateTextColor = () => {
    setTimeout(() => {
      getTextColorForDynamicBackground((color) => {
        setTextColor(color);
      });
    }, 100);
  };

  useEffect(() => {
    updateTextColor();
    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (mutation.attributeName === "style") {
          updateTextColor();
        }
      }
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["style"] });
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
        <Routes>
          <Route path="/" element={<Palette />} />
          <Route path="/about" element={<About />} />
          <Route path="/video" element={<Video />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
