import { useState, useEffect } from 'react'
import './App.css'

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
          <ul className="nav-links">
            <li><a href="#templates">Templates</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
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
            <span className="hero-tag">✨ Handcrafted Portfolio Templates</span>
            <h1>
              Premium Portfolio Templates <span className="text-gradient">Made for You</span>
            </h1>
            <p>
              Discover stunning, professionally designed portfolio templates.
              Each template is carefully crafted to help you showcase your work and stand out from the competition.
            </p>
            <div className="hero-cta">
              <a href="#templates" className="btn btn-primary btn-large">
                View Templates
                <span>→</span>
              </a>
              <button onClick={() => handleContactClick()} className="btn btn-secondary btn-large">
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Gallery Section */}
      <section id="templates" className="features">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Portfolio Showcases</span>
            <h2>Explore My <span className="text-gradient">Template Collection</span></h2>
            <p>
              Each template is designed with attention to detail, modern aesthetics,
              and optimized for performance. Contact me to purchase any template.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Creative Portfolio</h3>
              <p>
                Perfect for designers and artists. Features a modern grid layout,
                smooth animations, and a stunning image gallery to showcase your creative work.
              </p>
              <button
                onClick={() => handleContactClick('Creative Portfolio')}
                className="btn btn-primary"
                style={{ marginTop: 'var(--space-md)', width: '100%' }}
              >
                Contact to Buy
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Developer Portfolio</h3>
              <p>
                Built for developers and engineers. Includes project showcases,
                tech stack displays, GitHub integration, and a sleek dark mode design.
              </p>
              <button
                onClick={() => handleContactClick('Developer Portfolio')}
                className="btn btn-primary"
                style={{ marginTop: 'var(--space-md)', width: '100%' }}
              >
                Contact to Buy
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📸</div>
              <h3>Photography Portfolio</h3>
              <p>
                Designed for photographers. Full-screen image displays,
                lightbox gallery, and client testimonials to highlight your photography skills.
              </p>
              <button
                onClick={() => handleContactClick('Photography Portfolio')}
                className="btn btn-primary"
                style={{ marginTop: 'var(--space-md)', width: '100%' }}
              >
                Contact to Buy
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Minimalist Portfolio</h3>
              <p>
                Clean and simple design that puts your work front and center.
                Perfect for professionals who appreciate minimalism and elegance.
              </p>
              <button
                onClick={() => handleContactClick('Minimalist Portfolio')}
                className="btn btn-primary"
                style={{ marginTop: 'var(--space-md)', width: '100%' }}
              >
                Contact to Buy
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🚀</div>
              <h3>Startup Portfolio</h3>
              <p>
                Dynamic and bold design for entrepreneurs and startup founders.
                Features case studies, metrics dashboard, and team showcases.
              </p>
              <button
                onClick={() => handleContactClick('Startup Portfolio')}
                className="btn btn-primary"
                style={{ marginTop: 'var(--space-md)', width: '100%' }}
              >
                Contact to Buy
              </button>
            </div>

            <div className="feature-card">
              <div className="feature-icon">✍️</div>
              <h3>Writer Portfolio</h3>
              <p>
                Elegant typography-focused design for writers and content creators.
                Includes blog integration, reading time estimates, and beautiful layouts.
              </p>
              <button
                onClick={() => handleContactClick('Writer Portfolio')}
                className="btn btn-primary"
                style={{ marginTop: 'var(--space-md)', width: '100%' }}
              >
                Contact to Buy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="pricing">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Why Choose My Templates</span>
            <h2>Built with <span className="text-gradient">Excellence</span></h2>
            <p>
              Every template I create is crafted with modern technologies and best practices
              to ensure your portfolio performs exceptionally.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>
                Optimized for speed with modern build tools. Your portfolio will load
                instantly, providing the best user experience.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobile Responsive</h3>
              <p>
                Perfect on every screen size. All templates are tested across devices
                to ensure they look stunning everywhere.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎨</div>
              <h3>Modern Design</h3>
              <p>
                Contemporary aesthetics using the latest design trends. Animations,
                gradients, and smooth transitions included.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3>Easy to Customize</h3>
              <p>
                Well-organized code with clear documentation. Customize colors,
                fonts, and content to match your brand easily.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>SEO Optimized</h3>
              <p>
                Built following SEO best practices. Proper meta tags, semantic HTML,
                and optimized structure for search engines.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>Full Source Code</h3>
              <p>
                Complete access to clean, well-commented source code. Own it forever
                with no recurring fees or subscriptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Interested in Any Template?</h2>
            <p>Contact me to discuss pricing, customization options, or request a demo. I'm here to help you build your perfect portfolio.</p>
            <div className="cta-form">
              <button
                onClick={() => handleContactClick()}
                className="btn btn-primary btn-large"
                style={{ background: 'var(--color-bg-dark)', boxShadow: 'var(--shadow-lg)' }}
              >
                📧 Contact Me Now
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
                Handcrafted portfolio templates designed with passion and attention to detail.
              </p>
            </div>

            <div className="footer-section">
              <h4>Templates</h4>
              <ul className="footer-links">
                <li><a href="#templates">Creative Portfolio</a></li>
                <li><a href="#templates">Developer Portfolio</a></li>
                <li><a href="#templates">Photography Portfolio</a></li>
                <li><a href="#templates">All Templates</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Resources</h4>
              <ul className="footer-links">
                <li><a href="#features">Features</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="#support">Support</a></li>
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
            <p>© 2026 Schematic. All rights reserved. Crafted with ❤️ for creators.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
