import React from 'react'

export default function ChoixBlog(props) {
    
  return (
    <>
    <ul>
        <li className='lilisteblog' onClick={() => props.onBlogChange("AllArticles")}>Tous les articles </li>
        <li className='lilisteblog' onClick={() => props.onBlogChange("SearchArticle")}>Rechercher un article </li>
        <li className='lilisteblog' onClick={() => props.onBlogChange("SendArticle")}>Ajouter un article</li>

    </ul>
    </>
  )
}
