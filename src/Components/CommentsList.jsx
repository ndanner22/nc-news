import { useState, useEffect } from "react";
import { getCommentsByArticleId } from "../Utils/api";
import { useParams } from "react-router-dom";
import CommentCard from "./CommentCard";

export default function CommentsList() {
  const [commentsData, setCommentsData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { article_id } = useParams();

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
      <section className="comment-list">
        {isLoading ? (
          <h2>Loading....</h2>
        ) : (
          commentsData.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })
        )}
      </section>
    </>
  );
}
