import React from 'react';
import '../styles/Contact.scss';

function Contact({ isOpen, onClose }) {
    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="Contact-overlay" onClick={handleOverlayClick}>
            <div className="Contact">
                <h2>Contact Me</h2>
                <form>
                    <label>
                        Name:
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" required></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
                <button className="Contact-close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
}

export default Contact;