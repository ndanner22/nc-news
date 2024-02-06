import axios from "axios";

export const getArticles = (articleId) => {
  const url = articleId
    ? `https://new-engine.onrender.com/api/articles/${articleId}`
    : "https://new-engine.onrender.com/api/articles";

  return axios.get(url).then(({ data }) => {
    return { data };
  });
};
