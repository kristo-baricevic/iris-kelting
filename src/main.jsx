import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './tailwind.css'

const root = document.getElementById('root');

const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


if (root !== null) {
  ReactDOM.createRoot(root).render(rootElement);
} else {
  console.error('Root element not found!');
}