import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState('');

  const debouncedSearch = useCallback(
    debounce((query) => {
      onSearch(query);
    }, 500),
    []
  );

  const handleChange = (e) => {
    setInput(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <input
      type="text"
      value={input}
      onChange={handleChange}
      placeholder="Search items..."
      className="search-input"
    />
  );
};

export default SearchBar;
