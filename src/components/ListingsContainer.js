import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ items, onDelete }) {
  return (
    <main>
      <ul className="cards">
        {items.map((item) => {
          return <ListingCard item={item} key={item.id} onDelete={onDelete} />;
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
