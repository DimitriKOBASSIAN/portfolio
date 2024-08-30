import React from 'react';
import '../styles/Projects.scss';
import BookiImage from '../assets/Booki.png';
import SophieBluelImage from '../assets/SophieBluel.png';
import NinaCarducciImage from '../assets/NinaCarducci.png';
import KasaImage from '../assets/Kasa.png';
import MonVieuxGrimoireImage from '../assets/MonVieuxGrimoire.png';
import MenuMakerImage from '../assets/MenuMaker.png';

function Projects() {
    return (
        <div className="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-card">
                <div className="projects-card__item">
                    <h3 className="projects-subtitle">Booki</h3>
                    <div className="image-container">
                        <img className="projects-image" src={BookiImage} alt="booki" />
                    </div>
                    <p className="projects-description">Frontend</p>
                    <a href="#" className="projects-card__button">View More On Github</a>
                </div>
                <div className="projects-card__item">
                    <h3 className="projects-subtitle">Sophie Bluel</h3>
                    <div className="image-container">
                        <img className="projects-image" src={SophieBluelImage} alt="Sophie Bluel" />
                    </div>
                    <p className="projects-description">Javascript</p>
                    <a href="#" className="projects-card__button">View More On Github</a>
                </div>
                <div className="projects-card__item">
                    <h3 className="projects-subtitle">Nina Carducci</h3>
                    <div className="image-container">
                        <img className="projects-image" src={NinaCarducciImage} alt="Nina Carducci" />
                    </div>
                    
                    <p className="projects-description">SEO Optimization</p>
                    <a href="#" className="projects-card__button">View More On Github</a>
                </div>
                <div className="projects-card__item">
                    <h3 className="projects-subtitle">Kasa</h3>
                    <div className="image-container">
                        <img className="projects-image" src={KasaImage} alt="Kasa" />
                    </div>
                    <p className="projects-description">React App</p>
                    <a href="#" className="projects-card__button">View More On Github</a>
                </div>
                <div className="projects-card__item">
                    <h3 className="projects-subtitle">Mon Vieux grimoire</h3>
                    <div className="image-container">
                    <img className="projects-image" src={MonVieuxGrimoireImage} alt="Mon Vieux Grimoire" />
                    </div>
                    <p className="projects-description">Backend</p>
                    <a href="#" className="projects-card__button">View More On Github</a>
                </div>
                <div className="projects-card__item">
                    <h3 className="projects-subtitle">Menu Maker</h3>
                    <div className="image-container">
                    <img className="projects-image" src={MenuMakerImage} alt="Mon Vieux Grimoire" />
                    </div>
                    <p className="projects-description">Project Management</p>
                    <a href="#" className="projects-card__button">View More On Github</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;