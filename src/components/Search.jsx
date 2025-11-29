import { useEffect, useState } from "react";

const Search = (props) => {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  useEffect(() => {
    props.onSearch(text);
  }, [text]);

  return (
    <div>
      <form action="#">
        <label htmlFor="user">Search User : </label>
        <input type="text" id="user" onChange={handleChange} value={text} />
      </form>
    </div>
  );
};

export default Search;
