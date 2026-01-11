import { Link } from 'react-router-dom'

function Discipline() {
    const disciplineMyths = [
        {
            myth: '❌ "I need motivation to read consistently"',
            truth: '✅ Discipline replaces motivation with systems',
            explanation: 'Motivation is temporary. A scheduled reading time that you honor regardless of feelings is permanent.'
        },
        {
            myth: '❌ "I\'m too busy to read daily"',
            truth: '✅ You have time for what you prioritize',
            explanation: 'You find time for meals, sleep, and scrolling. Reading is a choice about what matters.'
        },
        {
            myth: '❌ "I need to finish every book"',
            truth: '✅ Strategic quitting is part of discipline',
            explanation: 'Discipline means knowing when a book isn\'t serving you and moving to one that does.'
        }
    ]

    return (
        <div className="page">
            {/* Discipline Hero */}
            <section className="page-hero discipline-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <div className="page-badge">Principle 02</div>
                        <h1>
                            Master the Art of <span className="text-gradient">Discipline</span>
                        </h1>
                        <p className="hero-subtitle">
                            Discipline isn't punishment—it's freedom. It's the bridge between knowing what to do
                            and actually doing it. Reading discipline is the habit that transforms potential into reality.
                        </p>
                    </div>
                </div>
            </section>

            {/* The Discipline Truth */}
            <section className="content-section">
                <div className="container">
                    <div className="content-box glass">
                        <h2>The Truth About Reading Discipline</h2>
                        <p className="large-text">
                            Everyone knows reading is valuable. But knowing and doing are separated by a massive gap called discipline.
                        </p>
                        <p>
                            <strong>Here's what most people get wrong:</strong> They think discipline means forcing yourself to do hard things.
                            In reality, discipline is about making the right things automatic.
                        </p>
                        <p>
                            When you have reading discipline, you don't debate whether to read. You don't need motivation.
                            You simply read—the same way you brush your teeth—because it's part of who you are.
                        </p>
                    </div>

                    <div className="quote-highlight">
                        <blockquote>
                            "Discipline is choosing between what you want now and what you want most."
                        </blockquote>
                    </div>
                </div>
            </section>

            {/* Myths vs Truth */}
            <section className="myths-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Discipline <span className="text-gradient">Myths vs Reality</span>
                        </h2>
                    </div>

                    <div className="myths-grid">
                        {disciplineMyths.map((item, index) => (
                            <div key={index} className="myth-card glass">
                                <div className="myth-text">{item.myth}</div>
                                <div className="myth-divider"></div>
                                <div className="truth-text">{item.truth}</div>
                                <p className="myth-explanation">{item.explanation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The 30-Day Framework */}
            <section className="framework-detail-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            The <span className="text-gradient">30-Day Discipline Blueprint</span>
                        </h2>
                        <p className="section-subtitle">
                            How to build unbreakable reading habits
                        </p>
                    </div>

                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-marker">
                                <span>Week 1</span>
                            </div>
                            <div className="timeline-content">
                                <h3>🌱 Foundation Phase</h3>
                                <p><strong>Goal:</strong> Make it ridiculously easy</p>
                                <ul>
                                    <li>Read just 5 minutes daily - no exceptions</li>
                                    <li>Same time, same place every day</li>
                                    <li>Stack it with existing habit (after coffee, before bed)</li>
                                    <li>Track with a simple checkmark</li>
                                </ul>
                                <div className="phase-insight">
                                    The goal isn't progress, it's proving you can do it daily.
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-marker">
                                <span>Week 2</span>
                            </div>
                            <div className="timeline-content">
                                <h3>📈 Expansion Phase</h3>
                                <p><strong>Goal:</strong> Increase without breaking</p>
                                <ul>
                                    <li>Extend to 15 minutes daily</li>
                                    <li>Choose books that genuinely interest you</li>
                                    <li>Take minimal notes on key insights</li>
                                    <li>Celebrate the streak—you're 50% there</li>
                                </ul>
                                <div className="phase-insight">
                                    Habits form when you protect the streak, not when you read the most.
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-marker">
                                <span>Week 3</span>
                            </div>
                            <div className="timeline-content">
                                <h3>🔗 Integration Phase</h3>
                                <p><strong>Goal:</strong> Make it part of your identity</p>
                                <ul>
                                    <li>Add reflection: "What did I learn today?"</li>
                                    <li>Share one insight with someone</li>
                                    <li>Connect new ideas to existing knowledge</li>
                                    <li>Notice how reading changes your thinking</li>
                                </ul>
                                <div className="phase-insight">
                                    You're no longer someone trying to read. You're a reader.
                                </div>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-marker">
                                <span>Week 4</span>
                            </div>
                            <div className="timeline-content">
                                <h3>⚡ Automation Phase</h3>
                                <p><strong>Goal:</strong> Make it automatic</p>
                                <ul>
                                    <li>Reading feels weird NOT to do</li>
                                    <li>Optimize your system based on what worked</li>
                                    <li>Plan your next 3 books</li>
                                    <li>Commit to the next 90 days</li>
                                </ul>
                                <div className="phase-insight">
                                    Congratulations. You've built discipline. Now comes the compound growth.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Daily Practice */}
            <section className="practice-detail-section">
                <div className="container">
                    <div className="practice-detail-content glass">
                        <h2>Your Daily Discipline Practice</h2>

                        <div className="daily-breakdown">
                            <div className="time-block">
                                <div className="time-icon">🌅</div>
                                <div className="time-info">
                                    <h4>Morning (15 minutes)</h4>
                                    <p><strong>Why:</strong> Your mind is fresh, willpower is highest</p>
                                    <p><strong>What:</strong> Read challenging, growth-oriented books</p>
                                    <p><strong>How:</strong> Coffee + quiet space + phone away</p>
                                </div>
                            </div>

                            <div className="time-block">
                                <div className="time-icon">☀️</div>
                                <div className="time-info">
                                    <h4>Midday (5 minutes)</h4>
                                    <p><strong>Why:</strong> Reinforce learning, create mental breaks</p>
                                    <p><strong>What:</strong> Review morning notes or read summaries</p>
                                    <p><strong>How:</strong> After lunch, review 1 key insight</p>
                                </div>
                            </div>

                            <div className="time-block">
                                <div className="time-icon">🌙</div>
                                <div className="time-info">
                                    <h4>Evening (10 minutes)</h4>
                                    <p><strong>Why:</strong> Reflection cements learning</p>
                                    <p><strong>What:</strong> Journal about application—how will you use this?</p>
                                    <p><strong>How:</strong> Before bed, write 3 sentences about tomorrow</p>
                                </div>
                            </div>
                        </div>

                        <div className="cta-box">
                            <p>Discipline + System = Transformation. Ready to see the results?</p>
                            <Link to="/self-improvement" className="btn btn-primary btn-large">
                                Discover Self-Improvement
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Discipline
