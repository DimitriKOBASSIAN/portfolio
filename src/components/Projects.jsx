import React, { useState } from 'react';
import '../styles/Projects.scss';
import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

// Static imports for images
import Booki from '../assets/Booki.png';
import SophieBluel from '../assets/SophieBluel.png';
import NinaCarducci from '../assets/NinaCarducci.png';
import Kasa from '../assets/Kasa.png';
import MonVieuxGrimoire from '../assets/MonVieuxGrimoire.png';
import MenuMaker from '../assets/MenuMaker.png';

const imageMap = {
    'Booki.png': Booki,
    'SophieBluel.png': SophieBluel,
    'NinaCarducci.png': NinaCarducci,
    'Kasa.png': Kasa,
    'MonVieuxGrimoire.png': MonVieuxGrimoire,
    'MenuMaker.png': MenuMaker,
};

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
    const projects = projectsData.map(project => ({
        ...project,
        image: imageMap[project.image] || '', // Use the image map to get the correct image
    }));

    const handleDetailsClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="projects">
            <h2 className="projects-title"> My Projects</h2>
            <div className="projects-card">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        link={project.link}
                        webLink={project.webLink}
                        technologies={project.technologies}
                        onDetailsClick={() => handleDetailsClick(project)}
                    />
                ))}
            </div>
            {selectedProject && (
                <ProjectModal project={selectedProject} onClose={handleCloseModal} />
            )}
        </div>
    );
}

export default Projects;