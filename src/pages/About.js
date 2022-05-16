import React from 'react'
import profileImage from '../images/Image1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <section className='about-section'>
      <img className='profile-img' alt='profile of Nikolaz' src={profileImage}/>
      <div>
        <h2 className='work-title'>Hello!</h2>
        <p className='about-para'>My name is Nikolaz and I'm a front end developper from France.</p>
        <p className='about-para'>
          My objective is to deliver the best solution to you and your organisation quickly.
        </p>        
        <p className='about-para'>
          With 2 years experience in web developpment and many more learning to code, it is always
          really motivating to start new projects. So get in touch and drop me a line.
        </p>
        <a href='mailto:nikolaz.90@laposte.net'><FontAwesomeIcon icon={faEnvelope}/></a>
      </div>
    </section>
  )
}

export default About