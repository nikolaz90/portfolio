import React, {useState, useRef, useEffect} from 'react'

function Home() {
  const [xAxis, setXAxis] = useState(0);
  const [yAxis, setYAxis] = useState(0);
  const [rotateDeg, setRotateDeg] = useState(1);

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
  console.log(rotateDeg);
  useEffect(()=>{
    const heroImage = document.querySelector('.home-section');
    heroImage.addEventListener('mousemove', moveBG)   
    //const doc = document;
    document.addEventListener('scroll', getScroll)
  }, [])


  return (
    <main>
      <section ref={container} className='home-section' style={{backgroundPosition:`${yAxis}px ${xAxis}px`}}>
        <h2 className='home-title'>Web Developper</h2>
        <h3 className='home-title-para'>Creative, keen and business minded</h3>
      </section>
      <section className='work-section'>
        <div className='work-title-container'>
          <span className='background-token' style={{transform:`rotate(${rotateDeg}deg)`}}/>
          <span className='background-token-2' style={{transform:`rotate(${rotateDeg+10}deg)`}}/>
          <span className='background-token-3' style={{transform:`rotate(${rotateDeg+20}deg)`}}/>          
          <h2>Work</h2>
        </div>
        

      </section>
      
    </main>

  )
}


export default Home