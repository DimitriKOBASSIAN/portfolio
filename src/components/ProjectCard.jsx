import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProjectCard.scss';

function ProjectCard({ title, image, description, link, technologies }) {
    return (
        <div className="projects-card__item">
            <h3 className="projects-subtitle">{title}</h3>
            <div className="image-container">
                <img className="projects-image" src={image} alt={title} />
            </div>
            <p className="projects-description">{description}</p>
            <div className="projects-technologies">
                {technologies.map((tech, index) => (
                    <button key={index} className="projects-technology__button">{tech}</button>
                ))}
            </div>
            <div className="projects-card__buttons">
                <a href={link} rel="noreferrer" target="_blank" className="projects-card__button">Github</a>
                <a className="projects-card__button">Details</a>
            </div>
        </div>
    );
}

ProjectCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProjectCard;