import React from 'react';

const ItemList = ({ items, onAddFavorite }) => {
  return (
    <div className="box">
      <h3>Search Results</h3>
      {items.length === 0 ? <p>No items found</p> : (
        <ul className="item-list">
          {items.map(item => (
            <li key={item.id} className="item">
              {item.name}
              <button className="btn" onClick={() => onAddFavorite(item)}>Add to Favorites</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
