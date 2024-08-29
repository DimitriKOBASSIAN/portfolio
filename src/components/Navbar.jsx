import React from 'react'
import '../styles/Navbar.scss'

function Navbar() {
    return (
        <div className="Navbar">
        <ul className="Navbar-list">
            <li className="Navbar-list-item">Home</li>
            <li className="Navbar-list-item">About</li>
            <li className="Navbar-list-item">Projects</li>
            <li className="Navbar-list-item">Contact</li>
        </ul>
        </div>
    )
    }


export default Navbar