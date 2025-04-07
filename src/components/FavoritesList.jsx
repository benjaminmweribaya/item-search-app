import React from 'react';

const FavoritesList = ({ favorites, onRemoveFavorite }) => {
    return (
        <div className="box">
            <h3>Favorites</h3>
            {favorites.length === 0 ? <p>No favorites yet</p> : (
                <ul className="item-list">
                    {favorites.map(item => (
                        <li key={item.id} className="item">
                            {item.name}
                            <button className="btn danger" onClick={() => onRemoveFavorite(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoritesList;
