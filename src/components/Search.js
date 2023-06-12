import React, { useState } from "react";

function Search({ items, onSubmit }) {
  const [value, setValue] = useState("");

  function onChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(value);
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input type="text" id="search" placeholder="search free stuff" value={value} onChange={onChange} />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
