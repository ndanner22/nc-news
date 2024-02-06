import axios from "axios";

export const getAllArticles = () => {
  const baseUrl = "https://new-engine.onrender.com/api/articles";
  return axios.get(baseUrl).then(({ data }) => {
    return { data };
  });
};

export const getArticleById = (articleId) => {
  const baseUrl = `https://new-engine.onrender.com/api/articles/${articleId}`;
  return axios.get(baseUrl).then(({ data }) => {
    return { data };
  });
};

export const getCommentsByArticleId = (articleId) => {
  const baseUrl = `https://new-engine.onrender.com/api/articles/${articleId}/comments`;
  return axios.get(baseUrl).then((data) => {
    return { data };
  });
};
