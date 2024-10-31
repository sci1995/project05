import React, { useState } from 'react';

function SearchBar({ setCity, setCountry }) {
  const [inputCity, setInputCity] = useState('');
  const [inputCountry, setInputCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputCity);
    setCountry(inputCountry);
    setInputCity('');  // Clear the input after submission
    setInputCountry('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="City"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Country"
        value={inputCountry}
        onChange={(e) => setInputCountry(e.target.value)}
        required
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
