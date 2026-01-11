import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Navigation() {
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/schematic', label: 'Schematic' },
        { path: '/discipline', label: 'Discipline' },
        { path: '/self-improvement', label: 'Self-Improvement' },
        { path: '/practice', label: 'Practice' }
    ]

    return (
        <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo">Schematic</Link>
                <div className="nav-links">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={location.pathname === link.path ? 'active' : ''}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}

export default Navigation
