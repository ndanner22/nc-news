import { useEffect, useState } from "react";
import UserCard from "./UserCard";
import { getAllUsers } from "../Utils/api";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then(({ data }) => {
      setUsers(data.users);
    });
  }, []);
  return (
    <main>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.username}>
              <UserCard user={user} />
            </li>
          );
        })}
      </ul>
    </main>
  );
}
