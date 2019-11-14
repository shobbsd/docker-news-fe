import React, { useState, useEffect } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import Search from "../components/Search";

export default function Articles() {
  const [allArticles, setAllArticles] = useState([]);
  const [error, setError] = useState(null);
  const [displayArticles, setDisplayArticles] = useState([]);

  useEffect(() => {
    api
      .getArticles()
      .then(articles => {
        setAllArticles(articles);
        setDisplayArticles(articles);
      })
      .catch(err => {
        setError({ msg: "Oh no, something went wrong" });
      });
  }, []);

  const filterArticles = value => {
    const articlesToDisplay = allArticles.filter(article => {
      return article.title.toLowerCase().includes(value.toLowerCase());
    });
    setDisplayArticles(articlesToDisplay);
  };

  if (error) return <h1>{error.msg}</h1>;

  return (
    <div>
      <h1>Articles</h1>
      <Search filterArticles={filterArticles} />
      <ul>
        {displayArticles.map(article => {
          return (
            <li key={article.article_id}>
              <Link to={"/articles/" + article.article_id}>
                {article.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
