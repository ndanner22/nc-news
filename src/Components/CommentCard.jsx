import { Link } from "react-router-dom";

export default function commentCard(props) {
  const { comment } = props;

  return (
    <li className="comment-card" comment={comment}>
      {comment.created_at.slice(0, 10)}
      <br />
      <p>{comment.body}</p>
      <p>Votes: {comment.votes}</p>
    </li>
  );
}
