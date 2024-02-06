import { Link } from "react-router-dom";

export default function ArticleCard(props) {
  const { article, articleId } = props;

  return (
    <Link className="article-link" to={`/article/${articleId}`}>
      <li className="article-card" article={article}>
        {article.title}
        <br />
        <img
          src={article.article_img_url}
          className="list-article-img"
          alt={`${article.title}`}
        />
        <p>Votes: {article.votes}</p>
      </li>
    </Link>
  );
}
