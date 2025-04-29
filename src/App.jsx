// App.jsx
import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const API_URI = "https://your-api-url.com/items"; // Replace with your actual API

const App = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  // Fetch items on mount
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch(API_URI);
      const data = await response.json();
      setItems(data);
    } catch (err) {
      setError("Failed to fetch items.");
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${API_URI}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Delete failed");
      }

      // Remove the item locally
      setItems(items.filter((item) => item.id !== id));
    } catch (err) {
      setError("Failed to delete item.");
    }
  };

  return (
    <div className="container">
      <h1>📝 Item List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ItemList items={items} onDelete={handleDelete} />
    </div>
  );
};

export default App;
