import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllArticles } from "../Utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articlesData, setArticlesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sortCategory, setSortCategory] = useState("created_at");

  useEffect(() => {
    getAllArticles().then(({ data }) => {
      setArticlesData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h2 className="article-list-header">Articles</h2>
      <h3>Order Articles By: </h3>
      <select
        id="sortCategory"
        value={sortCategory}
        onChange={(event) => {
          setSortCategory(event.target.value);
        }}
      >
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Votes</option>
      </select>
      <button>Reverse Order</button>
      <section className="article-list">
        {isLoading ? (
          <h2>Loading....</h2>
        ) : (
          articlesData.map((article) => {
            return (
              <ArticleCard
                key={article.article_id}
                article={article}
                articleId={article.article_id}
              />
            );
          })
        )}
      </section>
    </>
  );
}
