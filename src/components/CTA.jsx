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
            <p className="cta__text">After 12 years as a Help Desk coordinator for a worldwide company, I decided to face new challenges in web development.</p><p className="cta__text"> Passionate, curious, determined, I will be a key element for your team. </p>
            <div className="cta__buttons">
                <a href="#" className="cta__button" onClick={openModal}>Contact Me</a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dimitri-kobassian-53421821/" className="cta__button">See my resume</a>
            </div>
            <Contact isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}

export default CTA;