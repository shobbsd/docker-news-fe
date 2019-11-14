/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import * as api from "../api";

export default function SingleArticle({ article_id }) {
  const [article, setArticle] = useState({});

  useEffect(() => {
    api.getSingleArticle(article_id).then(setArticle);
  }, [article_id]);

  return (
    <div>
      <h1>{article.title}</h1>
      <main>{article.body}</main>
    </div>
  );
}
