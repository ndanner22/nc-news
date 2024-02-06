import { useState, useEffect } from "react";
import { getArticles } from "../../Utils/api";
import ArticleCard from "../ArticleCard";

export default function ArticleList() {
  const [articlesData, setArticlesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then(({ data }) => {
      data.sort((a, b) => b.created_at - a.created_at);
      setArticlesData(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <h2 className="article-list-header">Today's Top Headlines</h2>
      <section className="article-list">
        {isLoading ? (
          <h2>Loading....</h2>
        ) : (
          articlesData.slice(0, 3).map((article) => {
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
