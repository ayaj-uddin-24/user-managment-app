import { useEffect, useState } from "react";

import "./index.css";
import Users from "./components/Users";
import Search from "./components/Search";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState(users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setFilteredUsers(data);
      });
  }, []);

  const handleRemoveUser = (name) => {
    const filtered = filteredUsers.filter((userName) => {
      return userName.name !== name;
    });
    setFilteredUsers(filtered);
  };

  const handleSearch = (text) => {
    const value = text.toLowerCase();
    const searchUser = users.filter((userName) => {
      const user = userName.name.toLowerCase();
      console.log(user, value);
      return user.startsWith(value);
    });
    setFilteredUsers(searchUser);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Users Management App</h1>
      <Search onSearch={handleSearch} />
      {users && <Users users={filteredUsers} onRemoveUser={handleRemoveUser} />}
    </div>
  );
};

export default App;
