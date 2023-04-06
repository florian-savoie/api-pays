import React, { useState } from 'react';
import "./blog.css"
import ChoixBlog from '../../components/Blog/ChoixBlog';
import AllArticle from '../../components/Blog/AllArticle';
import SearchArticle from '../../components/Blog/SearchArticle';
import SendArticle from '../../components/Blog/SendArticle';


export default function Blog() {
    const [blog, setBlog] = useState(null);


    function handleblogChange(valeur) {
      setBlog(valeur);
    }

    function renderBlog() {
        switch (blog) {
          case "AllArticles":
            return <AllArticle />;
          case "SearchArticle":
            return <SearchArticle />;
          case "SendArticle":
            return <SendArticle />;
          default:
            return <AllArticle />;
        }
    }

    return (
        <>
            <div className="row">
                <div className="col-2">
                    <ChoixBlog onBlogChange={handleblogChange} />
                </div>
                <div className="col-10">{renderBlog()}</div>
            </div>

        </>
    );
}
