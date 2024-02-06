import axios from "axios";

export const getAllArticles = (articleId) => {
  const url = "https://new-engine.onrender.com/api/articles";
  return axios.get(url).then(({ data }) => {
    return { data };
  });
};

export const getArticleById = (articleId) => {
  const url = `https://new-engine.onrender.com/api/articles/${articleId}`;

  return axios.get(url).then(({ data }) => {
    return { data };
  });
};
