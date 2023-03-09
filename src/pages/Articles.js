import React from 'react'
import Article from '../components/Article'
import {useGlobalContext} from '../context'

export default function Articles() {
  const {isArticlesLoading, articlesData} = useGlobalContext()

  return (
    <section className='articles-section grey-bg-section'>
      <h2>Articles</h2>
      <p className='about-para'>Here are some articles I've written -&gt; check them out!</p>
      {isArticlesLoading ? <p>Loading...</p> : articlesData.map((item, index) => {
        return (
            <Article key={item.id} article={item} mostRecentArticleNumber={index + 1} />
        )
      })}
    </section>
  )
}
