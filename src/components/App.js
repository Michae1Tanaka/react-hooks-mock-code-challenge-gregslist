import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [items, setItems] = useState([]);
  const [displayItems, setDisplayItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((r) => r.json())
      .then((itemData) => {
        setItems(itemData);
        setDisplayItems(itemData);
      });
  }, []);

  function onDelete(target) {
    fetch(`http://localhost:6001/listings/${target.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedItems = items.filter((item) => {
          return item.id !== target.id;
        });
        setItems(updatedItems);
        setDisplayItems(updatedItems);
      });
  }

  function onSubmit(searchedPhrase) {
    if (searchedPhrase !== "") {
      const searchedItems = items.filter((item) => {
        return item.description.toLowerCase().includes(searchedPhrase.toLowerCase());
      });
      setDisplayItems(searchedItems);
    } else {
      setDisplayItems(items);
    }
  }

  return (
    <div className="app">
      <Header items={items} onSubmit={onSubmit} />
      <ListingsContainer items={displayItems} onDelete={onDelete} />
    </div>
  );
}

export default App;
