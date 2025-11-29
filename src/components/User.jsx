const User = ({ user }) => {
  const { id, name, email, phone } = user;

  const handleClick = () => {
    props.onRemoveUser(name);
  };

  return (
    <div className="user">
      <h3>{id}</h3>
      <h3>{name}</h3>
      <p>{email}</p>
      <p>{phone}</p>
      <button onClick={handleClick}>Remove</button>
    </div>
  );
};

export default User;
