import React, { useState } from 'react';
import '../styles/CTA.scss';
import Contact from './Contact';

function CTA() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="cta">
            <h2 className="cta__heading">Web developer based in Paris</h2>
            <p className="cta__text">Let's talk about your project. I can help you build a modern website that will help you grow your business.</p>
            <a href="#" className="cta__button" onClick={openModal}>Contact Me</a>
            <Contact isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default CTA;