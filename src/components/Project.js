import React from 'react'
import {useGlobalContext} from '../context'
import { Link } from 'react-router-dom'
import { textShortener } from '../utils/helpers/decorate'

function Project({title, tech, img, description, id, link}) {
  const {isDark} = useGlobalContext()
  return (
      <Link to={`/project/${id}`} >
        <article className='project-article' style={{backgroundImage:`url(${img})`}}>
            <div className='project-info-container'>
                <h3 className='project-title'>{title}</h3>
                <div className={`${isDark && 'project-info-tab'}`}>
                  <p>tech used: {tech}</p>
                  <p><small>{textShortener(description, 50)}</small></p>
                  <p className='small-para'><small>Click to see it</small></p>
                </div>
            </div>
        </article>          
      </Link>
  )
}

export default Project