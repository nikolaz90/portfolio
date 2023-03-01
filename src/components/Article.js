import React from 'react'

export default function Article({article}) {
  return (
    <a target='_blank' rel='noreferrer' href={article.url}>      
        <article>
            <hr className='line-through'/>
            <h4>{article.title}</h4>
            <p><small>{article.description}</small></p>
        </article>
    </a>
  )
}
