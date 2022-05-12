import React, {useState, useEffect} from 'react'
import {useGlobalContext} from '../context'


function Stats() {
  const {...data} = useGlobalContext();


  const {repos} = data;
  //console.log(repos)


  const [languages, setLanguages] = useState([])

  const languagesObj = repos.reduce((acc, curr)=>{
      const {language} = curr;
      if(!language) return acc
      if (!acc[language]){
        acc[language] = {label: language, count:1}
      }else{
        acc[language] = {...acc[language], count: acc[language].count+1}
      }
      return acc;
    }, {})

    const langStats = Object.values(languagesObj).slice(0,5)


  console.log(repos)
  console.log(langStats);


  return (
    <div>{langStats.map((item, index)=>{
      return <p key={index}>language{item.label} number of projects: {item.count}</p>
    })}</div>
  )
}

export default Stats