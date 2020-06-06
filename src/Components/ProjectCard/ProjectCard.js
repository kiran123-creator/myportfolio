import React from 'react';
import bootstrap4 from '../Image/bootstrap4.png'
import './ProjectCard.css';

export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <p>{project.name}</p>
            <p><b>Technical Stack:</b>{project.description}</p>
            <p><img src={project.img} className="imgsize"/></p>
            <p><b>Link:</b> <a href={project.link}>{project.link}</a> </p>
        </div>
    )
}