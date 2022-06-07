import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {useGlobalContext} from '../context'

function Navbar() {
  const {isDark, setDarkTheme} = useGlobalContext()

  const [isActive, setIsActive] = useState(null); 
  
  const handleActivePage = (pageNum)=>{
    setIsActive(pageNum);
  }

  return (
    <nav className='nav'>
      <div className='nav-content'>
        <h1><Link className='nav-logo' to='/'>Nikolaz.tech</Link></h1>
        <ul className='nav-links-container'>
          <li> <Link className={`nav-link ${isActive === 0 && 'active-nav'}`} to='/' onClick={()=>handleActivePage(0)}>Home</Link> </li>
          <li> <Link className={`nav-link ${isActive === 1 && 'active-nav'}`} to='/about' onClick={()=>handleActivePage(1)}>About</Link></li>
        </ul>
        <span className='theme-btn' onClick={setDarkTheme}>{isDark ? <small>Dark mode</small>:<small>Light mode</small>}</span>
      </div>
    </nav>
  )
}

export default Navbar