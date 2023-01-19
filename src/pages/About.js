import React from 'react'
import profileImage from '../images/Image1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Stats from '../components/Stats'

const yearsOfExp = () => {
  const startedDevYear = new Date('1 september 2020').getFullYear()
  const todayYear = new Date().getFullYear()
  return todayYear - startedDevYear;
}

function About() {
  return (
    <>
      <section className='about-section'>
        <img className='profile-img' alt='profile of Nikolaz' src={profileImage}/>
        <div>
          <h2 className='work-title'>Hello!</h2>
          <p className='about-para'>My name is Nikolaz and I'm a web developer from France.</p>
          <p className='about-para'>
            My objective is to deliver the best solution to you and your organisation quickly.
          </p>        
          <p className='about-para'>
            With {yearsOfExp()} years experience in web developpment and many more learning to code, it is always
            really motivating to start new projects. So get in touch and drop me a line.
          </p>
          <a href='mailto:nikolaz.90@laposte.net'><FontAwesomeIcon icon={faEnvelope}/></a>
        </div>
      </section>
      <section>
        <Stats/>
      </section>
    </>
  )
}

export default About