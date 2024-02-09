import { Link } from "react-router-dom";

export default function NavigationLink(props) {
  const { linkDestination } = props;
  const lowerDestination = linkDestination.toLowerCase();
  if (linkDestination === "All Articles")
    return (
      <li className="nav-link">
        <Link to={`/articles`}>{linkDestination}</Link>
      </li>
    );

  return (
    <li className="nav-link">
      <Link to={`/articles/${lowerDestination}`}>{linkDestination}</Link>
    </li>
  );
}
