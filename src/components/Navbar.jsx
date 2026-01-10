import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const navItems = [
        { path: '/', label: 'Home', icon: '🏠' },
        { path: '/links', label: 'Links', icon: '🔗' },
        { path: '/activity', label: 'Activity', icon: '📊' },
        { path: '/assignments', label: 'Assignments', icon: '📝' },
        { path: '/syllabus', label: 'Syllabus', icon: '📚' },
    ]

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <NavLink to="/" className="navbar-logo">
                    <span className="logo-icon">💰</span>
                    <span className="logo-text">FinanceHub</span>
                </NavLink>

                <button
                    className={`navbar-toggle ${isOpen ? 'active' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <ul className={`navbar-menu ${isOpen ? 'active' : ''}`}>
                    {navItems.map((item) => (
                        <li key={item.path} className="navbar-item">
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `navbar-link ${isActive ? 'active' : ''}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                <span className="nav-icon">{item.icon}</span>
                                <span className="nav-label">{item.label}</span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
