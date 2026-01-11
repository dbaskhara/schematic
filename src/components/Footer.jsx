import { Link } from 'react-router-dom'

function Footer() {
    return (
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
                        <h4>Learn</h4>
                        <ul className="footer-links">
                            <li><Link to="/schematic">Schematic Thinking</Link></li>
                            <li><Link to="/discipline">Reading Discipline</Link></li>
                            <li><Link to="/self-improvement">Self-Improvement</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Resources</h4>
                        <ul className="footer-links">
                            <li><Link to="/practice">Daily Framework</Link></li>
                            <li><a href="#guides">Book Recommendations</a></li>
                            <li><a href="#community">Community</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 Schematic. Build your mind. Design your destiny. 📚</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
