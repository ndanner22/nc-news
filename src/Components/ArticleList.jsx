import { useState, useEffect } from "react";
import { getAllArticles } from "../utils/api";
import ArticleCard from "./ArticleCard";

export default function ArticleList() {
  const [articlesData, setArticlesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then(({ data }) => {
      setArticlesData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h2 className="article-list-header">Articles</h2>
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
