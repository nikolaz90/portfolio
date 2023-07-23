import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context';

function Project() {
    const {id} = useParams();
    const {projectsData, isProjectsLoading} = useGlobalContext();

    const project = projectsData.find(project => project.id === Number(id));

    return (
        isProjectsLoading ? <p>Loading...</p> :
            <section className='project-page-section'>
                <h2>{project.title}</h2>
                <a target='_blank' rel='noreferrer' href={project.link}>
                    <img className='small-project-img' src={project.img} alt={`${project.title} by Nikolaz`}/>
                </a>
                <p>
                    Tech used : 
                    <br/> 
                    <br/> 
                    <small>{project.tech} </small>
                    <br/>
                    <br/>
                    <br/>
                    Description : 
                    <br/>
                    <br/>  
                    <small>{project.description}</small>
                </p>
                <a target='_blank' rel='noreferrer' href={project.link}>See {project.title} live</a>
            </section>
        
    )
}

export default Project