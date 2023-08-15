import React, {useState, useRef, useEffect} from 'react'
import Project from '../components/Project'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeFork, faCode, faQrcode, faTerminal,faMeteor } from '@fortawesome/free-solid-svg-icons'
import TechUsed from '../components/TechUsed'
import { useGlobalContext } from '../context'

function Home() {
  const {projectsData, isProjectsLoading} = useGlobalContext();

  const projectFilterer = (type) => {
    return projectsData.filter(project => {
      return project.projectType === type
    })
  }

  const professionalProjects = projectFilterer('professional');
  const personalProjects = projectFilterer("personal");


  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const [rotateDeg, setRotateDeg] = useState(1);
  const headerTitle = "Hello, I'm Nikolaz"
  const headerTitleSmall = "Hi, I'm Nikolaz"
  const screenWidth = document.documentElement.clientWidth

  const container = useRef(null)

  const moveBG=(e)=>{
    setXAxis((e.clientY / 50) - 10)
    setYAxis((e.clientX / 50) - 50)
  }

  const getScroll = (e) =>{
    setRotateDeg((oldNum)=>{
      return (oldNum + 1)
    })
  }
  useEffect(()=>{
    const heroImage = document.querySelector('.home-section');
    heroImage.addEventListener('mousemove', moveBG)   
    document.addEventListener('scroll', getScroll)
  }, [])


  return (
    <>
      <section ref={container} className='home-section' style={{backgroundPosition:`${yAxis}px ${xAxis}px`}}>
        <h2 className='home-title'>{screenWidth > 560 ? headerTitle: headerTitleSmall}</h2>
        <h3 className='home-title-para'>Creative, empathetic and business minded web developer</h3>
        <a href="#profession-section" className='scroll-down-link'><small>scroll down</small></a>
      </section>
      <section>
        <TechUsed/>
      </section>
      <section className='work-section professional-work-section' id="profession-section">
        <h2 className='work-title'>Work</h2>
        <div className='projects-container'>

          {isProjectsLoading ? <p>Loading...</p> : professionalProjects.map((item) => {
            return (
              <Project key={item.id} {...item} />
              )
            })}
        </div>
      </section>
      <section className='work-section' id='work-section'>
        <h2 className='work-title'>Personal projects</h2>
        <div className='projects-container'>
          <FontAwesomeIcon className='star token-1' style={{transform:`rotate(${rotateDeg*10}deg)`}} icon={faCodeFork} />
          <FontAwesomeIcon className='star token-2' style={{transform:`rotate(-${rotateDeg+20}deg)`}} icon={faCode}/>
          <FontAwesomeIcon className='star token-3' style={{transform:`rotate(-${rotateDeg+1}deg)`}} icon={faQrcode}/>
          <FontAwesomeIcon className='star token-4' style={{transform:`rotate(-${rotateDeg}deg)`}} icon={faTerminal} />
          <FontAwesomeIcon className='star token-5' style={{transform:`rotate(${rotateDeg+10}deg)`}} icon={faMeteor}/>
          {isProjectsLoading ? <p>Loading...</p> : personalProjects.map((item)=>{
            return <Project key={item.id} {...item}/>
          })}          
        </div>
      </section>
    </>
  )
}

export default Home