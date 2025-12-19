import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import RotatingText from './RotatingText';
import SparkleNavbar from './SparkleNavbar';
import './Header.css';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Academics', href: '#academics' },
        { name: 'Admissions', href: '#admissions' },
        { name: 'Student Life', href: '#student-life' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo">
                    <img src="/assets/logo.jpg" alt="Viswa Niketan Logo" className="logo-image" />
                    <div className="logo-text">
                        <h1>Viswa Niketan</h1>
                        <RotatingText
                            texts={['Empowering Minds', 'Shaping Leaders', 'Defining Excellence']}
                            mainClassName="logo-sub-rotate"
                            staggerFrom="last"
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "-120%" }}
                            staggerDuration={0.02}
                            splitLevelClassName="overflow-hidden pb-1"
                            transition={{ type: "spring", damping: 30, stiffness: 400 }}
                            rotationInterval={3000}
                        />
                    </div>
                </div>

                <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <div className="mobile-header">
                        <span className="logo-text-mobile">Menu</span>
                        <button className="close-menu" onClick={() => setIsMenuOpen(false)}>
                            <X size={24} />
                        </button>
                    </div>

                    {/* Replaced static list with SparkleNavbar */}
                    <SparkleNavbar
                        items={navLinks}
                        color="#F7931E"
                    />

                    <div className="mobile-cta">
                        <button className="btn btn-primary">Apply Now</button>
                    </div>
                </nav>

                <div className="header-actions">
                    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button className="btn btn-primary desktop-cta">Apply Now</button>
                    <button className="mobile-toggle" onClick={() => setIsMenuOpen(true)}>
                        <Menu size={24} />
                    </button>
                </div>

                {isMenuOpen && <div className="overlay" onClick={() => setIsMenuOpen(false)}></div>}
            </div>
        </header>
    );
};

export default Header;
