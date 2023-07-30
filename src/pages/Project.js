import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context';

function Project() {
    const {id} = useParams();
    const {projectsData, isProjectsLoading} = useGlobalContext();

    const project = projectsData.find(project => project.id === Number(id));

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [])
    
    return (
        isProjectsLoading ? <p>Loading...</p> :
            <section className='project-page-section'>
                <h2>{project.title}</h2>
                <a target='_blank' rel='noreferrer' href={project.link}>
                    <img className='small-project-img' src={project.img} alt={`${project.title} by Nikolaz`}/>
                </a>
                <article className='grey-bg-section project-details-container'>
                    <p><strong>Tech used : </strong></p>
                    <p><small>{project.tech} </small></p>
                    <p><strong>Description :</strong> </p>
                    <p><small>{project.description}</small></p>
                    <a className='cta-one' target='_blank' rel='noreferrer' href={project.link}>
                        See {project.title} live
                    </a>
                </article>
            </section>
        
    )
}

export default Project