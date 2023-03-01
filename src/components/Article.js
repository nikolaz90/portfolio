import React from 'react'

export default function Article({article, mostRecentArticleNumber}) {

  return (
    <a target='_blank' rel='noreferrer' href={article.url}>      
        <article className='article-container'>
            <hr className='line-through'/>
            <h4>{mostRecentArticleNumber} - {article.title}</h4>
            <p><small>{article.description}</small></p>
        </article>
    </a>
  )
}
