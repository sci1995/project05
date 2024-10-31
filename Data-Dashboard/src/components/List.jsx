import React from 'react';
import SearchBar from './SearchBar';
import Filter from './Filter';
import { Link } from 'react-router-dom';

const List = ({ data, setCity, setCountry, setAqiFilter, setPm25Filter, pm25Filter }) => {
  return (
    <div className="list-container">
      <SearchBar setCity={setCity} setCountry={setCountry} />
      <Filter setAqiFilter={setAqiFilter} setPm25Filter={setPm25Filter} pm25Filter={pm25Filter} />

   
      <div className="list">
      {data.map((entry) => (
        <Link
          to={`/detail/${entry.timestamp_utc}`} // Ensure the link is unique based on the identifier
          key={entry.timestamp_utc} // Unique key for each item
          className="list-item"
        >
          <h3>Timestamp: {new Date(entry.timestamp_local).toLocaleString()}</h3>
          <p>AQI: {entry.aqi}</p>
        </Link>
      ))}
    </div>
    </div>
  );
};

export default List;




          