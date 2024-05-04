import MenuBar from './components/MenuBar';
import Palette from './components/Palette';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Router>
      <h1>Iris Kelting</h1>
      <MenuBar />
      <Palette />
      <div className="border-2 border-blue-300 border-solid">
        <p className="read-the-docs">
          Click on a Page or Hover over a Color to learn More!
        </p>
      </div>
    </Router>
  )
}

export default App
