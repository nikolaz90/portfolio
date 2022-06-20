import React from 'react'
import {useGlobalContext} from '../context'

function Project({title, tech, img, description, link}) {
  const {isDark} = useGlobalContext()
  return (
      <a target='_blank' rel='noreferrer' href={link}>
        <article className='project-article' style={{backgroundImage:`url(${img})`}}>
            <div className='project-info-container'>
                <h3 className='project-title'>{title}</h3>
                <div className={`${isDark && 'project-info-tab'}`}>
                  <p>tech used: {tech}</p>
                  <p><small>{description}</small></p>
                  <p className='small-para'><small>Click to see it</small></p>
                </div>
                
            </div>
            
        </article>          
      </a>

  )
}

export default Project