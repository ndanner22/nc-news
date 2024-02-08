import { useState, useEffect } from "react";
import { getCommentsByArticleId, postArticleComment } from "../Utils/api";
import { useParams, Link } from "react-router-dom";
import CommentCard from "./CommentCard";

export default function CommentsList() {
  const [commentsData, setCommentsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { article_id } = useParams();
  const [showAddComment, setShowAddComment] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleClick() {
    setShowAddComment(!showAddComment);
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    postArticleComment(article_id, inputValue)
      .then(({ new_comment }) => {
        setShowAddComment(!showAddComment);
        setInputValue("");
        setCommentsData([new_comment, ...commentsData]);
      })
      .catch((err) => {
        setError("Cannot currently post a comment");
      });
  }

  useEffect(() => {
    getCommentsByArticleId(article_id)
      .then(({ data }) => {
        setCommentsData(data.data);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        setError(response);
        setIsLoading(false);
      });
  }, []);
  if (error)
    return (
      <h2>
        {error.status} : {error.data.message}
      </h2>
    );

  return (
    <>
      <h2 className="article-list-header">-Comments-</h2>
      <button onClick={handleClick} className="new-comment-button">
        {showAddComment ? "Hide New Comment" : "Add New Comment"}
      </button>
      {showAddComment ? (
        <form onSubmit={handleSubmit}>
          <div className="new-comment-container">
            <label htmlFor="new-comment-text">Comment:</label>
            <br />
            <textarea
              type="text"
              placeholder="Text here..."
              className="new-comment-box"
              value={inputValue}
              onChange={handleChange}
              required
            />
            <button className="comment-submit-button" type="submit">
              Submit
            </button>
            <br />
          </div>
        </form>
      ) : null}
      <section className="comment-list">
        {isLoading ? (
          <h2>Loading....</h2>
        ) : commentsData.length > 0 ? (
          commentsData.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })
        ) : (
          <>
            <h3>Be the first to comment</h3>
          </>
        )}
      </section>
    </>
  );
}
