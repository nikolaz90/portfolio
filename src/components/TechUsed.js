import React from 'react'
import techUsed from '../techUsedData'

export default function TechUsed() {
  return (
    <section className='tech-used-section'>
        <h3>Tech</h3>
        <div className='tech-used-container'>
            {techUsed.map((item) => {
                return (
                  <article key={item.id} className='tech-used-article'>
                    <span>{item.tech}</span>
                    <img key={item.id} className='tech-used-icon' src={item.img} alt={item.tech}/>
                  </article>
                )
            })}
        </div>
    </section>
  )
}
