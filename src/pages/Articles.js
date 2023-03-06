import React, {useState, useEffect} from 'react'
// import articlesData from '../articlesData'
import Article from '../components/Article'

export default function Articles() {
  const [articlesData, setArticlesData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  const fetchArticles = () => {
    setIsLoading(true);
    fetch('https://papatoo.herokuapp.com/api/v1/portfolio_articles')
      .then(response => response.json())
      .then(data => setArticlesData(data))
      .catch(error => console.log(error))
  };

  useEffect(() => {
    articlesData === null ? fetchArticles() : setIsLoading(false);
  }, []);

  return (
    <section className='articles-section grey-bg-section'>
      <h2>Articles</h2>
      <p className='about-para'>Here is an article I've written -&gt; check it out!</p>
      {isLoading ? <p>Loading...</p> : articlesData.reverse().map((item, index) => {
        return (
          <>
            <Article key={item.id} article={item} mostRecentArticleNumber={index + 1} />
          </>
        )
      })}
    </section>
  )
}
