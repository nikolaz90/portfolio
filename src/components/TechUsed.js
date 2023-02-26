import React from 'react'
import techUsed from '../techUsedData'

export default function TechUsed() {
  return (
    <section>
        <h3>Tech</h3>
        <div className='tech-used-container'>
            {techUsed.map((item) => {
                return <img key={item.id} className='tech-used-icon' src={item.img} alt={item.tech}/>
            })}
        </div>
    </section>
  )
}
