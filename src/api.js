const baseURL = process.env.baseURL || "http://localhost:9090";
const axios = require("axios").create({ baseURL });

export const getArticles = () => {
  return axios.get("/api/articles").then(({ data }) => data.articles);
};

export const getSingleArticle = article_id => {
  return axios
    .get("/api/articles/" + article_id)
    .then(({ data }) => data.article);
};
