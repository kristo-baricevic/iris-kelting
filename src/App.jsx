import MenuBar from './components/MenuBar';
import Palette from './components/Palette';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <Router>
      <div className="flex flex-col">
        <h1 className="text-left text-5xl font-extrabold">Iris Kelting</h1>
        <MenuBar />
        <Palette />
      </div>
    </Router>
  )
}

export default App
