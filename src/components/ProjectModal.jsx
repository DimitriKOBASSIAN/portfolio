import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProjectModal.scss';

function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>
                <h2>{project.title}</h2>
                <img src={project.image} alt={project.title} />
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View More On Github</a>
            </div>
        </div>
    );
}

ProjectModal.propTypes = {
    project: PropTypes.object,
    onClose: PropTypes.func.isRequired,
};

export default ProjectModal;