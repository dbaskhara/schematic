import { Link } from 'react-router-dom'

function SelfImprovement() {
    const transformationAreas = [
        {
            icon: '🧠',
            area: 'Mental Clarity',
            before: 'Scattered thoughts, information overload, decision fatigue',
            after: 'Clear thinking, connected knowledge, confident decisions',
            method: 'Read with purpose → Take notes → Review weekly → Apply concepts'
        },
        {
            icon: '💼',
            area: 'Career Growth',
            before: 'Stagnant skills, industry blind spots, missed opportunities',
            after: 'Expert knowledge, trend awareness, strategic advantage',
            method: 'Industry books → Skill development → Apply at work → Document wins'
        },
        {
            icon: '🎯',
            area: 'Goal Achievement',
            before: 'Vague aspirations, inconsistent effort, abandoned goals',
            after: 'Clear objectives, systematic progress, completed milestones',
            method: 'Goal-specific reading → Action plans → Daily implementation → Track results'
        },
        {
            icon: '🤝',
            area: 'Relationships',
            before: 'Communication struggles, misunderstandings, surface connections',
            after: 'Deeper empathy, effective communication, meaningful bonds',
            method: 'Psychology/communication books → Practice insights → Reflect on interactions'
        },
        {
            icon: '💪',
            area: 'Personal Power',
            before: 'Self-doubt, reactive living, external validation',
            after: 'Self-confidence, proactive choices, internal compass',
            method: 'Philosophy/mindset books → Journal reflections → Identity shift → New actions'
        },
        {
            icon: '🌟',
            area: 'Life Satisfaction',
            before: 'Going through motions, unclear purpose, nagging dissatisfaction',
            after: 'Intentional living, clear values, deep fulfillment',
            method: 'Wisdom literature → Life audits → Value alignment → Purposeful decisions'
        }
    ]

    return (
        <div className="page">
            {/* Self-Improvement Hero */}
            <section className="page-hero improvement-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <div className="page-badge">Principle 03</div>
                        <h1>
                            Become Your <span className="text-gradient">Best Self</span>
                        </h1>
                        <p className="hero-subtitle">
                            Self-improvement isn't about perfection—it's about direction. When you combine
                            schematic thinking with reading discipline, transformation becomes inevitable.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Compound Effect */}
            <section className="content-section">
                <div className="container">
                    <div className="content-box glass">
                        <h2>The Compound Effect of Systematic Reading</h2>
                        <p className="large-text">
                            Imagine two people. Both want to improve their lives.
                        </p>
                        <div className="comparison-grid">
                            <div className="comparison-column">
                                <h3>❌ Person A</h3>
                                <p>Buys books on impulse. Starts with excitement. Reads 20 pages. Gets distracted. Tries a different book. Repeats.</p>
                                <p className="result-text"><strong>1 year later:</strong> 15 unfinished books, same problems, frustrated.</p>
                            </div>
                            <div className="comparison-column highlight">
                                <h3>✅ Person B</h3>
                                <p>Chooses books strategically. Reads 15 minutes daily. Takes notes. Applies one idea per week. Compounds knowledge.</p>
                                <p className="result-text"><strong>1 year later:</strong> 24 completed books, transformed mindset, tangible results.</p>
                            </div>
                        </div>
                        <p className="large-text">
                            <strong>The difference?</strong> Person B used the schematic + discipline system for self-improvement.
                        </p>
                    </div>
                </div>
            </section>

            {/* Six Areas of Transformation */}
            <section className="transformation-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Six Areas of <span className="text-gradient">Transformation</span>
                        </h2>
                        <p className="section-subtitle">
                            How systematic reading changes every aspect of your life
                        </p>
                    </div>

                    <div className="transformation-grid">
                        {transformationAreas.map((area, index) => (
                            <div key={index} className="transformation-card glass">
                                <div className="transform-icon">{area.icon}</div>
                                <h3>{area.area}</h3>
                                <div className="transform-before">
                                    <strong>Before:</strong> {area.before}
                                </div>
                                <div className="transform-arrow">↓</div>
                                <div className="transform-after">
                                    <strong>After:</strong> {area.after}
                                </div>
                                <div className="transform-method">
                                    <strong>Method:</strong> {area.method}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The 90-Day Challenge */}
            <section className="challenge-section">
                <div className="container">
                    <div className="challenge-box glass">
                        <div className="challenge-header">
                            <h2>The 90-Day Transformation Challenge</h2>
                            <p>Commit to this system for 90 days and watch your life change</p>
                        </div>

                        <div className="challenge-commitment">
                            <h3>Your Commitment:</h3>
                            <div className="commitment-list">
                                <div className="commitment-item">
                                    <div className="check-icon">✓</div>
                                    <div>Read 15 minutes every single day (no exceptions)</div>
                                </div>
                                <div className="commitment-item">
                                    <div className="check-icon">✓</div>
                                    <div>Choose books aligned with your top 3 life goals</div>
                                </div>
                                <div className="commitment-item">
                                    <div className="check-icon">✓</div>
                                    <div>Take notes and review them weekly</div>
                                </div>
                                <div className="commitment-item">
                                    <div className="check-icon">✓</div>
                                    <div>Apply at least one new idea every week</div>
                                </div>
                                <div className="commitment-item">
                                    <div className="check-icon">✓</div>
                                    <div>Track your progress and adjust your system</div>
                                </div>
                            </div>
                        </div>

                        <div className="challenge-results">
                            <h3>What to Expect:</h3>
                            <div className="results-timeline">
                                <div className="result-phase">
                                    <span className="phase-label">Day 30</span>
                                    <p>The habit feels natural. You've finished 1-2 books. You notice clearer thinking.</p>
                                </div>
                                <div className="result-phase">
                                    <span className="phase-label">Day 60</span>
                                    <p>You've completed 4-5 books. People notice you're different. New opportunities appear.</p>
                                </div>
                                <div className="result-phase">
                                    <span className="phase-label">Day 90</span>
                                    <p>6-8 books done. Your identity has shifted. You ARE someone who reads. Life trajectory changed.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Real vs Fake Progress */}
            <section className="progress-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Real Progress vs <span className="text-gradient">Fake Progress</span>
                        </h2>
                    </div>

                    <div className="progress-comparison">
                        <div className="progress-column fake">
                            <h3>🚫 Fake Progress</h3>
                            <ul>
                                <li>Buying books but not reading them</li>
                                <li>Reading without taking notes</li>
                                <li>Learning without applying</li>
                                <li>Knowing what to do but not doing it</li>
                                <li>Starting strong then quitting</li>
                                <li>Waiting for motivation to strike</li>
                            </ul>
                        </div>
                        <div className="progress-column real">
                            <h3>✅ Real Progress</h3>
                            <ul>
                                <li>Finishing books, even imperfectly</li>
                                <li>Capturing ideas you'll actually use</li>
                                <li>Small experiments with new concepts</li>
                                <li>Daily action, not perfect action</li>
                                <li>Consistency over intensity</li>
                                <li>Following systems, not feelings</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="final-cta-section">
                <div className="container">
                    <div className="final-cta-box">
                        <h2>Your Blueprint is Ready</h2>
                        <p className="large-text">
                            You now understand the system: <strong>Schematic thinking</strong> provides structure,
                            <strong> reading discipline</strong> provides consistency, and <strong>self-improvement</strong> provides direction.
                        </p>
                        <p>
                            The question isn't whether this works—thousands have proven it does.
                            The question is: Will you start?
                        </p>
                        <div className="final-cta-buttons">
                            <Link to="/practice" className="btn btn-primary btn-large">
                                Get Your Daily Framework
                                <span>→</span>
                            </Link>
                            <Link to="/" className="btn btn-secondary btn-large">
                                Review the Journey
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SelfImprovement
