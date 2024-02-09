import ArticleList from "../ArticleList";
import { getArticlesByCategory } from "../../Utils/api";
import { useState, useEffect } from "react";
import ArticleCard from "../ArticleCard";

export default function CodingPage() {
  const [articlesData, setArticlesData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticlesByCategory("coding")
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
      <h2 className="article-list-header">Coding Articles</h2>
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
