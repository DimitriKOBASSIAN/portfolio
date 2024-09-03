import React from 'react';
import '../styles/Navbar.scss';

function Navbar() {
    return (
        <div className="Navbar">
            <ul className="Navbar-list">
                <li className="Navbar-list-item">
                    <a href="#home">Home</a>
                </li>
                <li className="Navbar-list-item">
                    <a href="#cta">About</a>
                </li>
                <li className="Navbar-list-item">
                    <a href="#projects">Projects</a>
                </li>
                {/* <li className="Navbar-list-item">Contact</li> */}
            </ul>
        </div>
    );
}

export default Navbar;