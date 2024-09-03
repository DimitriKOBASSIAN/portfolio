import React, { useState } from 'react';
import '../styles/Navbar.scss';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        closeMenu(); // Close the menu after scrolling
    };

    return (
        <div className="Navbar">
            <div className="Navbar-toggle" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </div>
            <ul className={`Navbar-list ${isOpen ? 'open' : ''}`}>
                <li className="Navbar-list-item">
                    <a href="#home" onClick={scrollToTop}>Home</a>
                </li>
                <li className="Navbar-list-item">
                    <a href="#cta" onClick={closeMenu}>About</a>
                </li>
                <li className="Navbar-list-item">
                    <a href="#projects" onClick={closeMenu}>Projects</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;