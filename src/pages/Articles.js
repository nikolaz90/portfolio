import React from 'react'
import articlesData from '../articlesData'
import Article from '../components/Article'

export default function Articles() {
  return (
    <section className='articles-section grey-bg-section'>
      <h2>Articles</h2>
      <p className='about-para'>Here is an article I've written -&gt; check it out!</p>
      {articlesData.reverse().map((item, index) => {
        return (
          <>
            <Article key={item.id} article={item} mostRecentArticleNumber={index + 1} />
          </>
        )
      })}
    </section>
  )
}
