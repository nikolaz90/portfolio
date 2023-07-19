import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context';

function Project() {
    const {id} = useParams();
    const {projectsData} = useGlobalContext();

    const project = projectsData.find(project => project.id === Number(id));

    console.log(project);

    return (
        <section>
            <h2>{project.title}</h2>
            <p>
                tech used : {project.tech}
            </p>
        </section>
    )
}

export default Project