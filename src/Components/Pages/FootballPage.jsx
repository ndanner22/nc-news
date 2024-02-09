import ArticleList from "../ArticleList";
import { getArticlesByCategory } from "../../Utils/api";
import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard";

export default function FootballPage() {
  const [articlesData, setArticlesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticlesByCategory("football")
      .then(({ data }) => {
        setArticlesData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        err.message = "Can't load articles";
      });
  }, []);

  return (
    <>
      <h2 className="article-list-header">Football Articles</h2>
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
