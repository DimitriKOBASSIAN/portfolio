import React from 'react';
import '../styles/Projects.scss';
import projectsData from '../data/projects.json';
import ProjectCard from './ProjectCard';

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
    const projects = projectsData.map(project => ({
        ...project,
        image: imageMap[project.image] || '', // Use the image map to get the correct image
    }));

    console.log(projects); // Debugging: log the projects array to check the image paths


    return (
        <div className="projects">
            <h2 className="projects-title">Projects</h2>
            <div className="projects-card">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        title={project.title}
                        image={project.image}
                        description={project.description}
                        link={project.link}
                        technologies={project.technologies}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;