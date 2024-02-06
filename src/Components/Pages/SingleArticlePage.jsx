import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../../Utils/api";

export default function SingleArticlePage() {
  const [article, setArticle] = useState({});
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  let date = "";

  useEffect(() => {
    getArticleById(article_id)
      .then(({ data }) => {
        setArticle(data);
        setIsLoading(false);
      })
      .catch(({ response }) => {
        setError(response);
        console.log(response);
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
      {isLoading ? (
        <h2 className="loading">Loading...</h2>
      ) : (
        <section className="single-article">
          <h2 className="single-article-header">{article.title}</h2>
          <img
            src={article.article_img_url}
            className="single-article-header"
          />
          <section className="article-byline">
            <p>By: {article.author}</p>
            <p>Date: {article.created_at.slice(0, 10)}</p>
          </section>
          <br />
          <p>{article.body}</p>
        </section>
      )}
    </>
  );
}
