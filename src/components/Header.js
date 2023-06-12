import React from "react";
import Search from "./Search";

function Header({ items, onSubmit }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search items={items} onSubmit={onSubmit} />
    </header>
  );
}

export default Header;
