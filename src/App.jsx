import { useState, useEffect } from 'react'
import './App.css'
import './schematic.css'
import './tech-tags.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleContactClick = (templateName) => {
    const subject = templateName
      ? `Interested in ${templateName} Template`
      : 'Interested in Portfolio Templates'
    window.location.href = `mailto:your.email@example.com?subject=${encodeURIComponent(subject)}`
  }

  return (
    <div className="App">
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="logo">Schematic</div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>
              Technical <span className="text-gradient">Portfolio Index</span>
            </h1>
            <p>
              Explore my engineered solutions and digital architectures.
              Each project represents a carefully designed system, visualized through modern interfaces and technical excellence.
            </p>
            <div className="hero-cta">
              <button onClick={() => handleContactClick()} className="btn btn-primary btn-large">
                Initialize Contact
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4 className="logo">Schematic</h4>
              <p style={{ color: 'var(--color-text-tertiary)', fontSize: '0.875rem' }}>
                Digital solutions engineered with technical precision and modern architecture. Building the future, one project at a time.
              </p>
            </div>


            <div className="footer-section">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><a href="#about">About Me</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#blog">Tech Blog</a></li>
                <li><a href="#resume">Resume</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Legal</h4>
              <ul className="footer-links">
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#license">License</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Schematic. All rights reserved. Engineered with ⚡ for digital excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
