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
            <h2 className="cta__heading">Web developper based in Paris</h2>
            <p className="cta__text">After 12 years of working in a worldwide company as a Help Desk coordinator, I felt the need to completely start anew and discover web development. Passionate, curious, determined, I will be a key element of your team. </p>
            <div className="cta__buttons">
                <a href="#" className="cta__button" onClick={openModal}>Contact Me</a>
                <a target="_blank" href="https://www.linkedin.com/in/dimitri-kobassian-53421821/" className="cta__button">See my resume</a>
            </div>
            <Contact isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default CTA;