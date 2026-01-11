import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="page">
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
                            <Link to="/schematic" className="btn btn-primary btn-large">
                                Start Your Journey
                                <span>→</span>
                            </Link>
                            <Link to="/discipline" className="btn btn-secondary btn-large">
                                Learn More
                            </Link>
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

            {/* Introduction Overview */}
            <section className="intro-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Your <span className="text-gradient">Path to Mastery</span>
                        </h2>
                        <p className="section-subtitle">
                            Three fundamental principles that transform how you grow
                        </p>
                    </div>

                    <div className="path-grid">
                        <Link to="/schematic" className="path-card glass">
                            <div className="path-number">01</div>
                            <div className="path-icon">📐</div>
                            <h3>Schematic Thinking</h3>
                            <p>
                                Learn how systematic, structured thinking creates clarity from complexity.
                                Discover the blueprint methodology that engineers use to build amazing things.
                            </p>
                            <div className="path-link">
                                Explore Schematic <span>→</span>
                            </div>
                        </Link>

                        <Link to="/discipline" className="path-card glass">
                            <div className="path-number">02</div>
                            <div className="path-icon">🎯</div>
                            <h3>Reading Discipline</h3>
                            <p>
                                Build the habit that separates dreamers from achievers. Master the art of
                                consistent, purposeful reading that compounds into wisdom.
                            </p>
                            <div className="path-link">
                                Build Discipline <span>→</span>
                            </div>
                        </Link>

                        <Link to="/self-improvement" className="path-card glass">
                            <div className="path-number">03</div>
                            <div className="path-icon">🚀</div>
                            <h3>Self-Improvement</h3>
                            <p>
                                Transform knowledge into action. Apply systematic reading to become the
                                best version of yourself through deliberate, continuous growth.
                            </p>
                            <div className="path-link">
                                Start Growing <span>→</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why This Matters */}
            <section className="why-section">
                <div className="container">
                    <div className="why-content">
                        <div className="why-text">
                            <h2>Why This System Works</h2>
                            <p>
                                Most people struggle with personal growth because they lack a system. They read randomly,
                                start and stop habits inconsistently, and wonder why nothing changes.
                            </p>
                            <p>
                                <strong>Schematic thinking gives you the structure.</strong> Reading discipline gives you the consistency.
                                Self-improvement gives you the direction. Together, they create unstoppable momentum.
                            </p>
                            <Link to="/practice" className="btn btn-primary">
                                See the Framework
                                <span>→</span>
                            </Link>
                        </div>
                        <div className="why-visual">
                            <div className="visual-box">
                                <div className="visual-item">
                                    <div className="visual-icon">📐</div>
                                    <div className="visual-label">Structure</div>
                                </div>
                                <div className="visual-connector">+</div>
                                <div className="visual-item">
                                    <div className="visual-icon">🎯</div>
                                    <div className="visual-label">Consistency</div>
                                </div>
                                <div className="visual-connector">+</div>
                                <div className="visual-item">
                                    <div className="visual-icon">🚀</div>
                                    <div className="visual-label">Direction</div>
                                </div>
                                <div className="visual-equals">=</div>
                                <div className="visual-result">
                                    <div className="visual-icon">⚡</div>
                                    <div className="visual-label">Transformation</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home
