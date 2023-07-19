import React from 'react'
import { useParams } from 'react-router-dom'

function Project() {
    const {id} = useParams();

    return (
        <section>
            {id}
        </section>
    )
}

export default Project