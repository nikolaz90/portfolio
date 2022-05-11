import React from 'react'
import {useGlobalContext} from '../context'

function About() {

    const {loading} = useGlobalContext();


  return (
    <div>About</div>
  )
}

export default About