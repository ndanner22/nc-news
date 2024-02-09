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

export const postArticleComment = (articleId, loggedInUser, newItem) => {
  return axios
    .post(
      `https://new-engine.onrender.com/api/articles/${articleId}/comments`,
      { username: loggedInUser, body: newItem }
    )
    .then(({ data }) => {
      return data;
    })
    .catch(({ response }) => {
      return `${response.data.status}: comments can't be updated at the moment`;
    });
};

export const getAllUsers = () => {
  return axios
    .get("https://new-engine.onrender.com/api/users")
    .then(({ data }) => {
      return { data };
    });
};

export const deleteComment = (commentId) => {
  return axios.delete(
    `https://new-engine.onrender.com/api/comments/${commentId}`
  );
};
