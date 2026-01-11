import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Schematic from './pages/Schematic'
import Discipline from './pages/Discipline'
import SelfImprovement from './pages/SelfImprovement'
import Practice from './pages/Practice'
import './App.css'
import './schematic.css'
import './tech-tags.css'
import './pages.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schematic" element={<Schematic />} />
          <Route path="/discipline" element={<Discipline />} />
          <Route path="/self-improvement" element={<SelfImprovement />} />
          <Route path="/practice" element={<Practice />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
