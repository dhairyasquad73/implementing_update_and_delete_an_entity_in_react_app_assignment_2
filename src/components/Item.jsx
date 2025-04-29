// Item.jsx
const Item = ({ item, onDelete }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        margin: "8px 0",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <p>{item.name}</p>
      <button
        style={{ marginRight: "10px", backgroundColor: "red", color: "white" }}
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
      <button disabled>Edit</button> {/* You can later implement this */}
    </div>
  );
};

export default Item;
