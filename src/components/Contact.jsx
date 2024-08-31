import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.scss';

function Contact({ isOpen, onClose }) {
    const form = useRef();

    if (!isOpen) return null;

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_zvyiha3',
            'template_hjajfol',
            form.current,
            { publicKey: 'ZgU3cOLjjjZTJiu_Z',}
        )
            .then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                onClose();
            }, (error) => {
                console.log(error.text);
                alert('Failed to send the message, please try again.');
            });
    };

    return (
        <div className="Contact-overlay" onClick={handleOverlayClick}>
            <div className="Contact">
                <h2>Contact Me</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <label>
                        Name:
                        <input type="text" name="user_name" required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="user_email" required />
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