import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
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

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schematic" element={<Schematic />} />
          <Route path="/discipline" element={<Discipline />} />
          <Route path="/self-improvement" element={<SelfImprovement />} />
          <Route path="/practice" element={<Practice />} />
          {/* Catch all - redirect to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
