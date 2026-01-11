import { useState, useEffect } from 'react'
import './App.css'
import './schematic.css'
import './tech-tags.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const readingFramework = [
    {
      step: '01',
      title: 'Design Your Blueprint',
      description: 'Every great structure starts with a plan. Define your reading goals, choose books that align with your growth, and create a systematic approach.',
      icon: '📐'
    },
    {
      step: '02',
      title: 'Build Consistency',
      description: 'Like laying a strong foundation, consistency is key. Start with just 15 minutes daily. Small, structured habits create lasting change.',
      icon: '🏗️'
    },
    {
      step: '03',
      title: 'Connect the System',
      description: 'Reading is not isolated. Connect ideas across books, apply knowledge to your life, and build an interconnected network of wisdom.',
      icon: '🔗'
    },
    {
      step: '04',
      title: 'Refine & Iterate',
      description: 'Great schematics evolve. Reflect on what you learn, adjust your approach, and continuously optimize your reading practice.',
      icon: '⚡'
    }
  ]

  const philosophyPoints = [
    {
      title: 'Structured Thinking',
      description: 'A schematic provides clarity through structure. Reading with intention gives your mind a blueprint for growth.',
      gradient: 'var(--gradient-primary)'
    },
    {
      title: 'Systematic Growth',
      description: 'Just as engineers build complex systems step-by-step, reading builds your knowledge architecture, one page at a time.',
      gradient: 'var(--gradient-accent)'
    },
    {
      title: 'Deliberate Design',
      description: 'Every line in a schematic has purpose. Every book you choose should serve your personal development intentionally.',
      gradient: 'var(--gradient-primary)'
    }
  ]

  const benefits = [
    { icon: '🧠', title: 'Mental Architecture', description: 'Build stronger neural pathways through consistent reading' },
    { icon: '📈', title: 'Compound Knowledge', description: 'Small daily progress creates exponential long-term growth' },
    { icon: '🎯', title: 'Focused Direction', description: 'Clear objectives transform reading from passive to purposeful' },
    { icon: '💡', title: 'Innovation Catalyst', description: 'Cross-pollinate ideas to spark creative breakthroughs' },
    { icon: '🔄', title: 'Adaptive Learning', description: 'Evolve your approach based on feedback and results' },
    { icon: '🌟', title: 'Lasting Transformation', description: 'Reading rewires your thinking for sustained success' }
  ]

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
          <div className="gradient-orb orb-3"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>
              Build Your Mind <span className="text-gradient">Like an Architect</span>
            </h1>
            <p className="hero-subtitle">
              Reading is the schematic for your success. Every book is a blueprint, every page a building block.
              Learn how to approach reading with the precision of an engineer and the vision of a designer.
            </p>
            <div className="hero-cta">
              <a href="#framework" className="btn btn-primary btn-large">
                Discover Your Framework
                <span>→</span>
              </a>
              <a href="#philosophy" className="btn btn-secondary btn-large">
                The Philosophy
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">15min</div>
                <div className="stat-label">Daily Reading</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">365</div>
                <div className="stat-label">Days of Growth</div>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <div className="stat-number">∞</div>
                <div className="stat-label">Potential</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Connection Section */}
      <section id="philosophy" className="philosophy-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              The <span className="text-gradient">Schematic Philosophy</span>
            </h2>
            <p className="section-subtitle">
              Why reading and systematic thinking are inseparable
            </p>
          </div>

          <div className="philosophy-grid">
            {philosophyPoints.map((point, index) => (
              <div key={index} className="philosophy-card glass">
                <div className="philosophy-icon" style={{ background: point.gradient }}></div>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reading Framework Section */}
      <section id="framework" className="framework-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              Your <span className="text-gradient">Reading Framework</span>
            </h2>
            <p className="section-subtitle">
              A systematic approach to build the reading habit
            </p>
          </div>

          <div className="framework-steps">
            {readingFramework.map((item, index) => (
              <div
                key={index}
                className={`framework-step ${activeStep === index ? 'active' : ''}`}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className="step-icon">{item.icon}</div>
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="step-connector"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              The <span className="text-gradient">Transformation</span>
            </h2>
            <p className="section-subtitle">
              How systematic reading rebuilds your reality
            </p>
          </div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Practice Section */}
      <section id="practice" className="practice-section">
        <div className="container">
          <div className="practice-content glass">
            <div className="practice-header">
              <h2>Your Daily Blueprint</h2>
              <p>Start building your mental architecture today</p>
            </div>

            <div className="practice-steps">
              <div className="practice-step">
                <div className="practice-time">Morning</div>
                <div className="practice-action">
                  <strong>15 Minutes</strong> - Read with fresh focus. Choose books that challenge and inspire.
                </div>
              </div>

              <div className="practice-step">
                <div className="practice-time">Afternoon</div>
                <div className="practice-action">
                  <strong>5 Minutes</strong> - Review your notes. Connect new ideas to existing knowledge.
                </div>
              </div>

              <div className="practice-step">
                <div className="practice-time">Evening</div>
                <div className="practice-action">
                  <strong>10 Minutes</strong> - Reflect and apply. How can today's reading improve tomorrow's actions?
                </div>
              </div>
            </div>

            <div className="practice-cta">
              <button className="btn btn-primary btn-large">
                Start Your Journey
                <span>→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Inspiration Quote */}
      <section className="inspiration-section">
        <div className="container">
          <div className="inspiration-box">
            <h2>"The blueprint you create today<br />becomes the life you live tomorrow."</h2>
            <p>Every page you read is a line in your personal schematic. Every concept you master is a component in your success system. Build deliberately. Read systematically. Grow exponentially.</p>
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
                Building minds through systematic reading and deliberate growth. Your blueprint for success starts with a single page.
              </p>
            </div>

            <div className="footer-section">
              <h4>Framework</h4>
              <ul className="footer-links">
                <li><a href="#philosophy">Philosophy</a></li>
                <li><a href="#framework">Reading System</a></li>
                <li><a href="#practice">Daily Practice</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><a href="#guides">Reading Guides</a></li>
                <li><a href="#books">Recommended Books</a></li>
                <li><a href="#community">Community</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Schematic. Build your mind. Design your destiny. 📚</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
