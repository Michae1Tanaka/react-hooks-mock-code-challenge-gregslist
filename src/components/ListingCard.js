import React, { useState } from "react";

function ListingCard({ item, onDelete }) {
  const [favorite, setFavorite] = useState(false);

  function handleFavorite(e) {
    if (favorite === false) {
      setFavorite(true);
    } else {
      setFavorite(false);
    }
  }

  function handleDelete(e) {
    onDelete(item);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {favorite ? (
          <button className="emoji-button favorite active" onClick={handleFavorite}>
            ★
          </button>
        ) : (
          <button className="emoji-button favorite" onClick={handleFavorite}>
            ☆
          </button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
