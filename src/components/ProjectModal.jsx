import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProjectModal.scss';

function ProjectModal({ project, onClose }) {
    if (!project) return null;

    const handleBackgroundClick = (e) => {
        if (e.target.className === 'modal') {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleBackgroundClick}>
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h2>{project.title}</h2>
                <p>{project.detailedDescription}</p>
            </div>
        </div>
    );
}

ProjectModal.propTypes = {
    project: PropTypes.object,
    onClose: PropTypes.func.isRequired,
};

export default ProjectModal;