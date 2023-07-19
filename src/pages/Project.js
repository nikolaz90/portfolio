import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context';

function Project() {
    const {id} = useParams();
    const {projectsData, isProjectsLoading} = useGlobalContext();

    const project = projectsData.find(project => project.id === Number(id));
    console.log(project);

    return (
        isProjectsLoading ? <p>Loading...</p> :
            <section className='project-page-section'>
                <h2>{project.title}</h2>
                <img className='small-project-img' src={project.img} alt={`${project.title} by Nikolaz`}/>
                <p>
                    tech used : {project.tech} 
                    <br/>
                    <br/>
                    <br/>
                    description : {project.description}
                </p>
                <a target='_blank' rel='noreferrer' href={project.link}>See {project.title} live</a>
            </section>
        
    )
}

export default Project