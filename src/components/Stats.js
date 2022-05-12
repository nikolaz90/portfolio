import React, {useState, useEffect} from 'react'
import {useGlobalContext} from '../context'
import Doughnut2DChart from './Doughnut2dChart'


function Stats() {
  const {repos} = useGlobalContext();

  const languagesObj = repos.reduce((acc, curr)=>{
      const {language} = curr;
      if(!language) return acc
      if (!acc[language]){
        acc[language] = {label: language, value:1}
      }else{
        acc[language] = {...acc[language], value: acc[language].value+1}
      }
      return acc;
    }, {})

    const langStats = Object.values(languagesObj).slice(0,5)

    const statPercentages = ()=>{
      const count = langStats.reduce((acc, curr)=>{
        acc += curr.value;
        return acc
      },0)

      return langStats.map((item)=>{
        return item.value = (item.value/count*100).toFixed(2)
      })
    }
    statPercentages()

  return (
    <div className='stats'>
      <div>
        <Doughnut2DChart data={langStats}/>
      </div>
      <div className='stats-reiteration'>
        {langStats.map((item, index)=>{
          return <p key={index}><small>{item.label} project percentage {item.value} %</small></p>
        })}       
      </div>
</div>
  )
}

export default Stats