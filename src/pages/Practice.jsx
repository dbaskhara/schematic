import { Link } from 'react-router-dom'
import { useState } from 'react'

function Practice() {
    const [activeStep, setActiveStep] = useState(0)

    const readingFramework = [
        {
            step: '01',
            title: 'Design Your Blueprint',
            description: 'Every great structure starts with a plan. Define your reading goals, choose books that align with your growth, and create a systematic approach.',
            icon: '📐',
            action: 'Choose 3 books for the next 90 days aligned with your top life goal'
        },
        {
            step: '02',
            title: 'Build Consistency',
            description: 'Like laying a strong foundation, consistency is key. Start with just 15 minutes daily. Small, structured habits create lasting change.',
            icon: '🏗️',
            action: 'Set a specific time and location for your daily 15-minute reading session'
        },
        {
            step: '03',
            title: 'Connect the System',
            description: 'Reading is not isolated. Connect ideas across books, apply knowledge to your life, and build an interconnected network of wisdom.',
            icon: '🔗',
            action: 'Create a simple note-taking system and review your notes every Sunday'
        },
        {
            step: '04',
            title: 'Refine & Iterate',
            description: 'Great schematics evolve. Reflect on what you learn, adjust your approach, and continuously optimize your reading practice.',
            icon: '⚡',
            action: 'Monthly check-in: What\'s working? What needs adjustment? Iterate your system'
        }
    ]

    return (
        <div className="page">
            {/* Practice Hero */}
            <section className="page-hero practice-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <div className="page-badge">Your Action Plan</div>
                        <h1>
                            The Daily <span className="text-gradient">Framework</span>
                        </h1>
                        <p className="hero-subtitle">
                            Everything you've learned comes together here. This is your practical,
                            step-by-step blueprint for building the reading habit that transforms your life.
                        </p>
                    </div>
                </div>
            </section>

            {/* Reading Framework */}
            <section className="framework-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Your <span className="text-gradient">Reading Framework</span>
                        </h2>
                        <p className="section-subtitle">
                            The four-step system that makes growth inevitable
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
                                    <div className="step-action">
                                        <strong>Action:</strong> {item.action}
                                    </div>
                                </div>
                                <div className="step-connector"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Daily Practice */}
            <section className="practice-section">
                <div className="container">
                    <div className="practice-content glass">
                        <div className="practice-header">
                            <h2>Your Daily Blueprint</h2>
                            <p>30 minutes that will change your life</p>
                        </div>

                        <div className="practice-steps">
                            <div className="practice-step">
                                <div className="practice-time">Morning</div>
                                <div className="practice-action">
                                    <strong>15 Minutes</strong> - Read with fresh focus. Choose books that challenge and inspire.
                                    <div className="practice-tip">💡 Tip: Stack with coffee/breakfast for automatic consistency</div>
                                </div>
                            </div>

                            <div className="practice-step">
                                <div className="practice-time">Afternoon</div>
                                <div className="practice-action">
                                    <strong>5 Minutes</strong> - Review your notes. Connect new ideas to existing knowledge.
                                    <div className="practice-tip">💡 Tip: Do this during lunch break or mid-afternoon slump</div>
                                </div>
                            </div>

                            <div className="practice-step">
                                <div className="practice-time">Evening</div>
                                <div className="practice-action">
                                    <strong>10 Minutes</strong> - Reflect and apply. How can today's reading improve tomorrow's actions?
                                    <div className="practice-tip">💡 Tip: Journal before bed - what will you do differently tomorrow?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weekly Structure */}
            <section className="weekly-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Your <span className="text-gradient">Weekly Structure</span>
                        </h2>
                        <p className="section-subtitle">
                            Beyond daily reading: The weekly rituals that maximize results
                        </p>
                    </div>

                    <div className="weekly-grid">
                        <div className="weekly-card">
                            <div className="weekly-day">Sunday</div>
                            <h3>📋 Planning Session</h3>
                            <p>Review last week's notes. Plan this week's reading. Set one implementation goal.</p>
                            <span className="time-estimate">30 minutes</span>
                        </div>

                        <div className="weekly-card">
                            <div className="weekly-day">Monday-Friday</div>
                            <h3>📚 Daily Practice</h3>
                            <p>Execute your 30-minute daily framework. Protect this time religiously.</p>
                            <span className="time-estimate">30 min/day</span>
                        </div>

                        <div className="weekly-card">
                            <div className="weekly-day">Saturday</div>
                            <h3>🎯 Application Day</h3>
                            <p>Take one big idea from the week. Spend 2 hours implementing it in your life.</p>
                            <span className="time-estimate">2 hours</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Book Selection Guide */}
            <section className="book-selection-section">
                <div className="container">
                    <div className="book-selection-content glass">
                        <h2>How to Choose the Right Books</h2>
                        <p className="intro-text">Not all books are equal. Strategic selection multiplies your results.</p>

                        <div className="selection-framework">
                            <div className="selection-rule">
                                <h4>The 3-Goal Rule</h4>
                                <p>List your top 3 life goals. Every book should directly support at least one of them. If it doesn't, don't read it (yet).</p>
                            </div>

                            <div className="selection-rule">
                                <h4>The Category Mix</h4>
                                <p>Balance your reading: <strong>50% skills</strong> (career/practical), <strong>30% mindset</strong> (philosophy/psychology), <strong>20% inspiration</strong> (biography/vision).</p>
                            </div>

                            <div className="selection-rule">
                                <h4>The Quality Test</h4>
                                <p>Is this book recommended by multiple experts? Has it stood the test of time? Does it challenge your thinking? If yes to 2+, read it.</p>
                            </div>
                        </div>

                        <div className="book-examples">
                            <h3>Starter Book Recommendations</h3>
                            <div className="book-categories">
                                <div className="book-category">
                                    <h4>🧠 Mindset & Discipline</h4>
                                    <ul>
                                        <li>Atomic Habits - James Clear</li>
                                        <li>Deep Work - Cal Newport</li>
                                        <li>Mindset - Carol Dweck</li>
                                    </ul>
                                </div>
                                <div className="book-category">
                                    <h4>📈 Success & Growth</h4>
                                    <ul>
                                        <li>The 7 Habits - Stephen Covey</li>
                                        <li>Thinking, Fast and Slow - Kahneman</li>
                                        <li>Range - David Epstein</li>
                                    </ul>
                                </div>
                                <div className="book-category">
                                    <h4>💡 Wisdom & Philosophy</h4>
                                    <ul>
                                        <li>Meditations - Marcus Aurelius</li>
                                        <li>Man's Search for Meaning - Frankl</li>
                                        <li>The Almanack of Naval Ravikant</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tracking System */}
            <section className="tracking-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            Track Your <span className="text-gradient">Progress</span>
                        </h2>
                        <p className="section-subtitle">
                            What gets measured gets improved
                        </p>
                    </div>

                    <div className="tracking-methods">
                        <div className="tracking-card">
                            <h3>📊 Simple Metrics</h3>
                            <ul>
                                <li>✓ Daily reading streak (most important!)</li>
                                <li>📖 Books completed this month</li>
                                <li>📝 Key insights captured</li>
                                <li>🎯 Ideas actually applied</li>
                            </ul>
                        </div>

                        <div className="tracking-card">
                            <h3>📓 Note-Taking Template</h3>
                            <div className="template-example">
                                <p><strong>Book:</strong> [Title]</p>
                                <p><strong>Big Idea:</strong> [One sentence summary]</p>
                                <p><strong>Key Insights:</strong> [3 bullet points]</p>
                                <p><strong>Application:</strong> [How will I use this?]</p>
                                <p><strong>Next Action:</strong> [One thing to do this week]</p>
                            </div>
                        </div>

                        <div className="tracking-card">
                            <h3>🎯 Monthly Review Questions</h3>
                            <ul>
                                <li>Did I read 25+ days this month?</li>
                                <li>What was the best idea I learned?</li>
                                <li>What did I actually apply?</li>
                                <li>What should I read next?</li>
                                <li>How is my system working?</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Start Today */}
            <section className="start-section">
                <div className="container">
                    <div className="start-box">
                        <h2>Start Today, Not Tomorrow</h2>
                        <p className="large-text">
                            You have the blueprint. You understand the system. You know it works.
                        </p>
                        <p>
                            The only thing between you and transformation is starting. Not next Monday. Not next month. Today.
                        </p>

                        <div className="first-steps">
                            <h3>Your First 3 Steps (Do These Now):</h3>
                            <div className="first-step-item">
                                <span className="step-num">1</span>
                                <p>Choose ONE book to start with (pick from recommendations above or something you already own)</p>
                            </div>
                            <div className="first-step-item">
                                <span className="step-num">2</span>
                                <p>Set a specific time for tomorrow's 15-minute reading session. Add it to your calendar.</p>
                            </div>
                            <div className="first-step-item">
                                <span className="step-num">3</span>
                                <p>Create a simple tracking method (checkmarks on calendar, notes app, journal—keep it simple)</p>
                            </div>
                        </div>

                        <div className="start-cta">
                            <p className="cta-text">Want to review the full system?</p>
                            <Link to="/" className="btn btn-primary btn-large">
                                Back to Home
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Practice
