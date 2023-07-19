import React from 'react'
import profileImage from '../images/redman.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Stats from '../components/Stats'
import TechUsed from '../components/TechUsed'

const yearsOfExp = () => {
  const startedDevYear = new Date('1 september 2020').getFullYear()
  const todayYear = new Date().getFullYear()
  return todayYear - startedDevYear;
}

function About() {
  return (
    <>
      <section className='about-section grey-bg-section'>
        <img className='profile-img' alt='profile of Nikolaz' src={profileImage}/>
        <div>
          <h2 className='work-title'>Hello!</h2>
          <p className='about-para'>My name is Nikolaz and I'm a web developer from France.</p>
          <p className='about-para'>
            <small>
              With {yearsOfExp()} years experience in web developpment, 
              I’m keen on following best coding practices, in backend or in frontend. 
              Object Orientated Programming, unit, feature and request testing as well as maintainability are the topics I spend a lot of time on. 
              <br/><br/>
              This makes apps easier to maintain, refactor and develop in the future.
              I can start new projects, web apps or APIs.
              Include documentation and tests, or fix bugs, 
              develop new features on old projects or fix styling issues.
            </small>
          </p>
          <p className='about-para'>Get in touch and drop me a line.</p>
          <a href='mailto:nikolaz.90@laposte.net'><FontAwesomeIcon icon={faEnvelope}/></a>
        </div>
      </section>
      <section>
        <TechUsed/>
      </section>
      <section>
        <Stats/>
      </section>
    </>
  )
}

export default About