import { Link } from 'react-router-dom'

function Schematic() {
    const schematicPrinciples = [
        {
            icon: '🏗️',
            title: 'Structure Creates Clarity',
            description: 'A schematic breaks down complex systems into understandable components. Apply this to your life: break big goals into clear, actionable steps.',
            example: 'Goal: "Read more" → Blueprint: 15 min daily, specific books, track progress'
        },
        {
            icon: '🔗',
            title: 'Everything Connects',
            description: 'In a schematic, every component has a relationship to others. Your knowledge works the same way—connecting ideas creates understanding.',
            example: 'Reading about psychology + business + communication = Leadership mastery'
        },
        {
            icon: '⚙️',
            title: 'Systems Over Motivation',
            description: 'A schematic doesn\'t rely on inspiration—it\'s a reliable blueprint. Build systems that work regardless of how you feel.',
            example: 'Set reading time + location + trigger habit = Automatic consistency'
        },
        {
            icon: '📊',
            title: 'Measurable Progress',
            description: 'Schematics include specifications and measurements. Track your growth with clear metrics and milestones.',
            example: 'Books completed, pages read, concepts applied, habits maintained'
        }
    ]

    return (
        <div className="page">
            {/* Schematic Hero */}
            <section className="page-hero schematic-hero">
                <div className="container">
                    <div className="page-hero-content">
                        <div className="page-badge">Principle 01</div>
                        <h1>
                            Think Like an <span className="text-gradient">Engineer</span>
                        </h1>
                        <p className="hero-subtitle">
                            A schematic is more than a diagram—it's a philosophy. It represents systematic thinking,
                            deliberate design, and the power of breaking complexity into clarity.
                        </p>
                    </div>
                </div>
            </section>

            {/* What is Schematic Thinking */}
            <section className="content-section">
                <div className="container">
                    <div className="content-box glass">
                        <h2>What Is Schematic Thinking?</h2>
                        <p className="large-text">
                            Imagine you're building a house. You wouldn't just start stacking bricks randomly.
                            You'd create a blueprint—a schematic—that shows exactly how everything fits together.
                        </p>
                        <p>
                            <strong>Schematic thinking applies this same principle to your personal growth.</strong>
                        </p>
                        <p>
                            Instead of reading random books, chasing every new idea, or trying to change everything at once,
                            you create a deliberate blueprint for your development. You design your growth systematically.
                        </p>
                    </div>

                    <div className="key-insight">
                        <div className="insight-icon">💡</div>
                        <div className="insight-content">
                            <h3>The Core Insight</h3>
                            <p>
                                Random effort produces random results. Systematic effort produces predictable,
                                compounding results. The difference is having a schematic.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Four Principles */}
            <section className="principles-section">
                <div className="container">
                    <div className="section-header">
                        <h2 className="section-title">
                            The Four <span className="text-gradient">Schematic Principles</span>
                        </h2>
                        <p className="section-subtitle">
                            Apply these engineering concepts to your personal growth
                        </p>
                    </div>

                    <div className="principles-grid">
                        {schematicPrinciples.map((principle, index) => (
                            <div key={index} className="principle-card">
                                <div className="principle-icon">{principle.icon}</div>
                                <h3>{principle.title}</h3>
                                <p>{principle.description}</p>
                                <div className="principle-example">
                                    <strong>Example:</strong> {principle.example}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How to Apply */}
            <section className="application-section">
                <div className="container">
                    <div className="application-content glass">
                        <h2>How to Apply Schematic Thinking Today</h2>

                        <div className="application-steps">
                            <div className="app-step">
                                <div className="app-step-number">1</div>
                                <div className="app-step-content">
                                    <h4>Define Your System Goal</h4>
                                    <p>What do you want to build? Be specific. "Become smarter" is vague. "Read 24 books on business strategy in 12 months" is a schematic.</p>
                                </div>
                            </div>

                            <div className="app-step">
                                <div className="app-step-number">2</div>
                                <div className="app-step-content">
                                    <h4>Break It Into Components</h4>
                                    <p>What are the building blocks? 24 books = 2 per month = 1 every 2 weeks = 30 pages daily.</p>
                                </div>
                            </div>

                            <div className="app-step">
                                <div className="app-step-number">3</div>
                                <div className="app-step-content">
                                    <h4>Create the Connections</h4>
                                    <p>How do pieces relate? Morning routine → Reading time → Note-taking → Weekly review → Monthly application.</p>
                                </div>
                            </div>

                            <div className="app-step">
                                <div className="app-step-number">4</div>
                                <div className="app-step-content">
                                    <h4>Build Your Blueprint</h4>
                                    <p>Document your system. Make it visual. Track it. Adjust it. A schematic evolves as you build.</p>
                                </div>
                            </div>
                        </div>

                        <div className="cta-box">
                            <p>Ready to build the daily habits that make this system work?</p>
                            <Link to="/discipline" className="btn btn-primary btn-large">
                                Learn About Discipline
                                <span>→</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Schematic
