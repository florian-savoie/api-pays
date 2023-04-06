import React, { useState, useEffect } from 'react';

export default function AllArticle() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/assert/blog.json")
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error(error));
  }, []);
  return (
    <div>
    <h1>Liste</h1>
    {articles.length > 0 ? (
        <ul className='ularticle'>
            {articles.map(article => (
                <li key={article.title} className='liarticle'>
                    <h2>{article.title}</h2>
                    <img className='imagearticle' src={article.image} alt={article.title} />
                    <p>{article.content}</p>
                </li>
            ))}
        </ul>
    ) : (
        <p>Chargement en cours...</p>
    )}
</div>
  )
}
