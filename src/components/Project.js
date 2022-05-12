import React from 'react'

function Project({title, tech, img, description, link}) {

  return (
      <a href={link}>
        <article className='project-article' style={{backgroundImage:`url(${img})`}}>
            <div className='project-info-container'>
                <h3 className='project-title'>{title}</h3>
                <p>tech used: {tech}</p>
                <p><small>{description}</small></p>
                <p className='small-para'><small>Click to see it</small></p>
            </div>
            
        </article>          
      </a>

  )
}

export default Project