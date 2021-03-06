import React, {useState, useRef, useEffect} from 'react'
import projects from '../projectsData'
import Project from '../components/Project'
//import star from '../images/star.svg'
import Stats from '../components/Stats'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeFork, faCode, faQrcode, faTerminal,faMeteor } from '@fortawesome/free-solid-svg-icons'

function Home() {
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const [rotateDeg, setRotateDeg] = useState(1);
  const headerTitle = '{ Web Developper }'
  const headerTitleSmall = 'Web Developper'
  const screenWidth = document.documentElement.clientWidth

  const container = useRef(null)

  const moveBG=(e)=>{
    setXAxis((e.clientY / 20) -10);
    setYAxis((e.clientX / 20) -50)
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
    <main>
      <section ref={container} className='home-section' style={{backgroundPosition:`${yAxis}px ${xAxis}px`}}>
        <h2 className='home-title'>{screenWidth > 400 ? headerTitle: headerTitleSmall}</h2>
        <h3 className='home-title-para'>Creative, keen and business minded front-end developper</h3>
      </section>
      <section className='work-section'>
          <h2 className='work-title'>Work</h2>
        <div className='projects-container'>
          <FontAwesomeIcon className='star token-1' style={{transform:`rotate(${rotateDeg*10}deg)`}} icon={faCodeFork} />
          <FontAwesomeIcon className='star token-2' style={{transform:`rotate(-${rotateDeg+20}deg)`}} icon={faCode}/>
          <FontAwesomeIcon className='star token-3' style={{transform:`rotate(-${rotateDeg+1}deg)`}} icon={faQrcode}/>
          <FontAwesomeIcon className='star token-4' style={{transform:`rotate(-${rotateDeg}deg)`}} icon={faTerminal} />
          <FontAwesomeIcon className='star token-5' style={{transform:`rotate(${rotateDeg+10}deg)`}} icon={faMeteor}/>
          {projects.map((item)=>{
            return <Project key={item.id} {...item}/>
          })}          
        </div>
      </section>
      <section>
        <Stats/>
      </section>
    </main>

  )
}


export default Home