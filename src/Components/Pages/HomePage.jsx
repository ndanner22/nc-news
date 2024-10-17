import { useState, useEffect } from "react";
import { getAllArticles } from "../../Utils/api";
import ArticleCard from "../ArticleCard";
import { ClipLoader } from "react-spinners";

export default function ArticleList() {
  const [articlesData, setArticlesData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles().then(({ data }) => {
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
          <>
            <div className="spinner">
              <ClipLoader color="#36D7B7" loading={isLoading} size={30} />
            </div>
          </>
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
