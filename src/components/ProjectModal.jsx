import React from 'react';
import PropTypes from 'prop-types';
import '../styles/ProjectModal.scss';

// Static imports for detail images
import BookiDetail from '../assets/BookiDetail.png';
import SophieBluelDetail from '../assets/SophieBluelDetail.png';
import NinaCarducciDetail from '../assets/NinaCarducciDetail.png';
import KasaDetail from '../assets/KasaDetail.png';
import MonVieuxGrimoireDetail from '../assets/MonVieuxGrimoireDetail.png';
import MenuMakerDetail from '../assets/MenuMakerDetail.png';

const imageMap = {
    'BookiDetail.png': BookiDetail,
    'SophieBluelDetail.png': SophieBluelDetail,
    'NinaCarducciDetail.png': NinaCarducciDetail,
    'KasaDetail.png': KasaDetail,
    'MonVieuxGrimoireDetail.png': MonVieuxGrimoireDetail,
    'MenuMakerDetail.png': MenuMakerDetail,
};

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
                <h3>{project.title}</h3>
                <p className="projectCard-description">{project.detailedDescription}</p>
                {project.detailImage && (
                    <img
                        src={imageMap[project.detailImage]}
                        alt={project.title}
                        className="projectCard-image"
                    />
                )}
            </div>
        </div>
    );
}

ProjectModal.propTypes = {
    project: PropTypes.object,
    onClose: PropTypes.func.isRequired,
};

export default ProjectModal;