import React from 'react';
import '../styles/Projects.scss';

function Projects() {
    return (
        <div className="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-card">
                <div className="projects-card__item">
                    <h3 className="projects-subtitle">Booki</h3>
                    <p className="projects-description">Frontend</p>
                    <a href="#" className="projects-card__button">View More On Github</a>
                </div>
                <div className="projects-card__item">
                    <h3 className="projects-subtitle">Sophie Bluel</h3>
                    <p className="projects-description">Javascript</p>
                    <a href="#" className="projects-card__button">View More On Github</a>
                </div>
                <div className="projects-card__item">
                    <h3 className="projects-subtitle">Nina Carducci</h3>
                    <p className="projects-description">SEO Optimization</p>
                    <a href="#" className="projects-card__button">View More On Github</a>
                </div>
                <div className="projects-card__item">
                    <h3 className="projects-subtitle">Kasa</h3>
                    <p className="projects-description">React App</p>
                    <a href="#" className="projects-card__button">View More On Github</a>
                </div>
                <div className="projects-card__item">
                    <h3 className="projects-subtitle">Mon Vieux grimoire</h3>
                    <p className="projects-description">Backend</p>
                    <a href="#" className="projects-card__button">View More On Github</a>
                </div>
                <div className="projects-card__item">
                    <h3 className="projects-subtitle">Menu Maker</h3>
                    <p className="projects-description">Project Management</p>
                    <a href="#" className="projects-card__button">View More On Github</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;