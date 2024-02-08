import { useContext } from "react";
import { UserContext } from "./Contexts/UserContext";

const UserCard = ({ user }) => {
  const { loggedInUser, setLoggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div className="UserCard">
      <h2>{user.username}</h2>
      <img
        className="user-avatar"
        src={user.avatar_url}
        alt={`avatar for user ${user.username}`}
      />
      {user.username !== loggedInUser.username ? (
        <button
          onClick={() => {
            setLoggedInUser(user);
          }}
        >
          Change User
        </button>
      ) : null}
    </div>
  );
};

export default UserCard;
