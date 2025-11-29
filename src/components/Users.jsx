import User from "./User";

const Users = ({ onRemoveUser, users }) => {
  return (
    <div className="users">
      {users.map((user, index) => {
        return <User key={index} user={user} onRemoveUser={onRemoveUser} />;
      })}
    </div>
  );
};

export default Users;
