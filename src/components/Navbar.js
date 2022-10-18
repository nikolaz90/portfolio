import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useGlobalContext} from '../context'

function Navbar() {
  const {isDark, setDarkTheme} = useGlobalContext()

  const [isActive, setIsActive] = useState(null); 
  
  const handleActivePage = (pageNum)=>{
    setIsActive(pageNum);
  }

  const overlay = document.getElementById('overlay')

  const handleCheck = ()=>{
      overlay.classList.toggle('overlay-activated')
  }

  const navRemoveMenu = ()=>{
      document.getElementById('hamburger-checkbox').checked = !document.getElementById('hamburger-checkbox').checked
  }

  const handleClickLink = () => {
    handleCheck()
    navRemoveMenu()
  }

  return (
    <>
      <nav className='navbar flex-row'>
        <div className='title-container flex-row'>
          <Link to='/' className='nav-title-link'><h1 className='nav-title'>web_dev_niko<span className='nav-title-grey'>laz.</span></h1></Link>
            <input id='hamburger-checkbox' type='checkbox'/>
            <label className='hamburger' onClick={handleClickLink} forHtml='hamburger-checkbox'>
              <div className='hamburger-line'></div>
            </label>
        </div>
        <ul class='nav-link-container flex-row'>
          <Link to='/'><li id="nav-link" className='nav-link'>Home</li></Link>
          <Link to='/about'><li id="nav-link" className='nav-link'>About</li></Link>
          <span onClick={setDarkTheme}>{isDark ? <li className='nav-link'>Dark mode</li>:<li className='nav-link'>Light mode</li>}</span>
        </ul>
      </nav>
      <div id="overlay" className='overlay-menu'>
        <ul class='nav-link-container-overlay'>
          <Link to='/' onClick={handleClickLink}><li class='nav-link'>Home</li></Link>
          <Link to='/about' onClick={handleClickLink}><li class='nav-link'>About</li></Link>
          <span onClick={setDarkTheme}>{isDark ? <li className='nav-link'>Dark mode</li>:<li className='nav-link'>Light mode</li>}</span>
        </ul>
      </div>
    </>
    



    // <nav className='nav-content'>
    //     <h1><Link className='nav-logo' to='/'>Nikolaz.tech</Link></h1>
    //     <ul className='nav-links-container'>
    //       <li> <Link className={`nav-link ${isActive === 0 && 'active-nav'}`} to='/' onClick={()=>handleActivePage(0)}>Home</Link> </li>
    //       <li> <Link className={`nav-link ${isActive === 1 && 'active-nav'}`} to='/about' onClick={()=>handleActivePage(1)}>About</Link></li>
    //     </ul>
    //     <span className='theme-btn' onClick={setDarkTheme}>{isDark ? <small>Dark mode</small>:<small>Light mode</small>}</span>
    // </nav>

  )
}

export default Navbar