import React, { useState } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import FavoritesList from './components/FavoritesList';

const App = () => {
  const [items, setItems] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleSearch = async (query) => {
    if (!query.trim()) return setItems([]);
    try {
      const response = await axios.get(`https://67f63bb842d6c71cca610dfb.mockapi.io/Items?name_like=${query}`);
      setItems(response.data);
    } catch (error) {
      console.error('Search error:', error);
    }
  };

  const addToFavorites = (item) => {
    if (!favorites.find(fav => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter(fav => fav.id !== id));
  };

  return (
    <div className="App">
      <h2>🛒 Item Search App</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="container">
        <ItemList items={items} onAddFavorite={addToFavorites} />
        <FavoritesList favorites={favorites} onRemoveFavorite={removeFromFavorites} />
      </div>
    </div>
  );
};

export default App;

