import axios from "axios";

export const getAllArticles = () => {
  const baseUrl = "https://new-engine.onrender.com/api/articles";
  return axios
    .get(baseUrl)
    .then(({ data }) => {
      return { data };
    })
    .catch(({ response }) => {
      return `${response.data.status}: articles can't load`;
    });
};

export const getArticleById = (articleId) => {
  const baseUrl = `https://new-engine.onrender.com/api/articles/${articleId}`;
  return axios
    .get(baseUrl)
    .then(({ data }) => {
      return { data };
    })
    .catch(({ response }) => {
      return `${response.data.status}: article can't load`;
    });
};

export const getCommentsByArticleId = (articleId) => {
  const baseUrl = `https://new-engine.onrender.com/api/articles/${articleId}/comments`;
  return axios
    .get(baseUrl)
    .then((data) => {
      return { data };
    })
    .catch(({ response }) => {
      return `${response.data.status}: comments can't load`;
    });
};

export const patchArticleVote = (articleId, newItem) => {
  return axios
    .patch(`https://new-engine.onrender.com/api/articles/${articleId}`, {
      inc_votes: newItem,
    })
    .then(({ data }) => {
      return data;
    })
    .catch(({ response }) => {
      return `${response.data.status}: votes can't be updated at the moment`;
    });
};

export const postArticleComment = (articleId, newItem) => {
  return axios
    .post(
      `https://new-engine.onrender.com/api/articles/${articleId}/comments`,
      { username: "grumpy19", body: newItem }
    )
    .then(({ data }) => {
      return data;
    })
    .catch(({ response }) => {
      return `${response.data.status}: comments can't be updated at the moment`;
    });
};
