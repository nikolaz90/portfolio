import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeMerge, faAt } from '@fortawesome/free-solid-svg-icons'

function Footer() {
  return (
    <footer className='footer'>
      <a className='footer-icon' href='https://github.com/nikolaz90'><FontAwesomeIcon className='github-icon' icon={faCodeMerge}/>github</a>
      <a className='footer-icon' href='mailto:nikolaz.90@laposte.net'><FontAwesomeIcon icon={faAt}/>Email</a>
    </footer>
  )
}

export default Footer