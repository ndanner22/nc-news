import { Link } from "react-router-dom";
import { UserContext } from "./Contexts/UserContext";
import { useContext, useState } from "react";
import { deleteComment } from "../Utils/api";

export default function CommentCard(props) {
  const { comment } = props;
  const { loggedInUser } = useContext(UserContext);
  const currentUser = loggedInUser.username;
  const [beingDeleted, setBeingDeleted] = useState(false);

  function handleClick() {
    setBeingDeleted(true);
    deleteComment(comment.comment_id).catch((err) => {
      setBeingDeleted(false);
      err.message = "comments cann't be deleted at this time";
    });
  }

  return !beingDeleted ? (
    <li className="comment-card" comment={comment}>
      {comment.created_at.slice(0, 10)}
      <br />
      <p>{comment.body}</p>
      <p>By: {comment.author}</p>
      <p>Votes: {comment.votes}</p>
      {currentUser === comment.author ? (
        <button onClick={handleClick} className="comment-delete-button">
          Delete
        </button>
      ) : null}
    </li>
  ) : null;
}
