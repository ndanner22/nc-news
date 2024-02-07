import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, patchArticleVote } from "../../Utils/api";
import CommentsList from "../CommentsList";

export default function SingleArticlePage() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [voteCount, setVoteCount] = useState(0);
  let date = "";

  useEffect(() => {
    getArticleById(article_id)
      .then(({ data }) => {
        setArticle(data);
        setIsLoading(false);
        setVoteCount(data.votes);
      })
      .catch(({ response }) => {
        setError(response);
        setIsLoading(false);
      });
  }, []);

  function handleClick() {
    setIsVisible(!isVisible);
  }

  function handleUpClick() {
    setVoteCount(voteCount + 1);
    patchArticleVote(article_id, 1).catch((err) => {
      setVoteCount(voteCount - 1);
      setError("Voting is not currently available");
    });
  }

  function handleDownClick() {
    setVoteCount(voteCount - 1);
    patchArticleVote(article_id, -1).catch((err) => {
      setVoteCount(voteCount + 1);
      setError("Voting is not currently available");
    });
  }

  if (error)
    return (
      <h2>
        {error.status} : {error.data.message}
      </h2>
    );

  return (
    <>
      {isLoading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <>
          <section className="single-article">
            <h2 className="single-article-header">{article.title}</h2>
            <img
              src={article.article_img_url}
              className="single-article-header"
            />
            <section className="article-votes">
              <button onClick={handleUpClick} className="vote-button">
                👍 Up Vote!
              </button>
              <p>Votes: {voteCount}</p>
              <button onClick={handleDownClick} className="vote-button">
                👎 Down Vote!
              </button>
            </section>
            <section className="article-byline">
              <p>By: {article.author}</p>
              <p>Date: {article.created_at.slice(0, 10)}</p>
            </section>
            <br />
            <p>{article.body}</p>
          </section>
          <button onClick={handleClick} className="comments-button">
            {isVisible ? "Hide Comments" : "Show Comments"}
          </button>
          {isVisible ? <CommentsList /> : null}
        </>
      )}
    </>
  );
}
