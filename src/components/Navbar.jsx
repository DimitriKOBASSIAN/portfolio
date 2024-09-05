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

    const scrollToTop = (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        closeMenu(); // Close the menu after scrolling
    };

    const scrollToSection = (event, id, offset = 0) => {
        event.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            closeMenu(); // Close the menu after scrolling
        }
    };

    return (
        <div className="Navbar">
            <div className="Navbar-toggle" onClick={toggleMenu}>
                &#9776; {/* Hamburger icon */}
            </div>
            <ul className={`Navbar-list ${isOpen ? 'open' : ''}`}>
                <li className="Navbar-list-item" onClick={(event) => scrollToTop(event)}>
                    <a href="#home">Home</a>
                </li>
                <li className="Navbar-list-item" onClick={(event) => scrollToSection(event, 'cta', 50)}>
                    <a href="#cta">About</a>
                </li>
                <li className="Navbar-list-item" onClick={(event) => scrollToSection(event, 'projects', 50)}>
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;