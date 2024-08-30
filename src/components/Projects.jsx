import React from 'react';
import '../styles/Projects.scss';

function Projects() {
    return (
        <div className="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-card">
                <div className="projects-card__item">
                    <h3>Project 1</h3>
                    <p>Description of Project 1</p>
                    <a href="#" className="projects-card__button">View More</a>
                </div>
                <div className="projects-card__item">
                    <h3>Project 2</h3>
                    <p>Description of Project 2</p>
                    <a href="#" className="projects-card__button">View More</a>
                </div>
                <div className="projects-card__item">
                    <h3>Project 3</h3>
                    <p>Description of Project 3</p>
                    <a href="#" className="projects-card__button">View More</a>
                </div>
                <div className="projects-card__item">
                    <h3>Project 4</h3>
                    <p>Description of Project 4</p>
                    <a href="#" className="projects-card__button">View More</a>
                </div>
                <div className="projects-card__item">
                    <h3>Project 5</h3>
                    <p>Description of Project 5</p>
                    <a href="#" className="projects-card__button">View More</a>
                </div>
                <div className="projects-card__item">
                    <h3>Project 6</h3>
                    <p>Description of Project 6</p>
                    <a href="#" className="projects-card__button">View More</a>
                </div>
                <div className="projects-card__item">
                    <h3>Project 7</h3>
                    <p>Description of Project 7</p>
                    <a href="#" className="projects-card__button">View More</a>
                </div>
                <div className="projects-card__item">
                    <h3>Project 8</h3>
                    <p>Description of Project 8</p>
                    <a href="#" className="projects-card__button">View More</a>
                </div>
            </div>
        </div>
    );
}

export default Projects;