import React from "react";
import "./Styles/HomeProjects.css";
import projects from '../Data/projects.json';
import { FiExternalLink } from 'react-icons/fi';
import { FaFolder } from 'react-icons/fa';


const HomeProjects = () => {
    return (
        <div className="projects-container">
            <h2>Projects</h2>
            <h1>Things I've Worked On</h1>
            <div className="project-list-container">
                {
                    projects.map(
                        (project, index) => (
                            <div className="project-list-item-container" key={index}>
                                <div className="project-icon-container">
                                    {project.icon ? (
                                        <img className="project-item-img" src={project.icon} alt={project.name} />
                                    ) : (
                                        <FaFolder size={35} color="#2ba3f7" />
                                    )}
                                    <FiExternalLink size={25} color="#2ba3f7" />
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </div>
    );
}

export default HomeProjects;