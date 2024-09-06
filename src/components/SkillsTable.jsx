import React, { useEffect, useState } from 'react';
import skillsData from '../data/skills.json'; // Adjust the path as necessary
import '../styles/SkillsTable.scss';

const SkillsTable = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        // Load skills from JSON file
        setSkills(skillsData);
    }, []);

    const renderProgressBar = (rating) => {
        const percentage = (rating / 5) * 100;
        return (
            <div className="progress-bar">
                <div className="progress-bar-fill" style={{ width: `${percentage}%` }}></div>
            </div>
        );
    };

    return (
        <div className="SkillsTable">
            <h2>My Skills</h2>
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map((skillCategory, index) => (
                        <tr key={index}>
                            <td>{skillCategory.category}</td>
                            <td>
                                {skillCategory.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="skill-item">
                                        <span>{skill.name}</span>
                                        {renderProgressBar(skill.rating)}
                                    </div>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SkillsTable;