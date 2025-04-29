// ItemList.jsx
import Item from "./Item";

const ItemList = ({ items, onDelete }) => {
  return (
    <div>
      {items.length > 0 ? (
        items.map((item) => (
          <Item key={item.id} item={item} onDelete={onDelete} />
        ))
      ) : (
        <p>No items found.</p>
      )}
    </div>
  );
};

export default ItemList;
