import React from 'react';
import { ProjectData } from '../data/projects';
import './body.css';
import ProjectCard from './ProjectCard';
import Separator from '../common/separator/Separator';

function Projects() {
    const data = ProjectData;

    return (
        <div className="projects">
            <Separator />
            <label className="section-title">Projects</label>
            <div>
                {data.map((project) => {
                    return <ProjectCard project={project}/>;
                })}
            </div>
        </div>
    )
}

export default Projects;
