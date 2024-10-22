

import React, { useState, useEffect } from 'react';
import List from './components/List';
import NavBar from './components/NavBar';
// import Header from './components/Header';
import './App.css'

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [aqiFilter, setAqiFilter] = useState('');
  const [pm25Filter, setPm25Filter] = useState([0, 50]); // Range filter for pm25
  const [error, setError] = useState(null);

  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key

  // Fetch data using the API when city and country are set
  useEffect(() => {
    if (city && country) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.weatherbit.io/v2.0/forecast/airquality?city=${city}&country=${country}&key=${API_KEY}`
          );
          const result = await response.json();
          setData(result.data);
          setFilteredData(result.data); // Set filtered data to the full dataset initially
        } catch (err) {
          setError('Could not fetch data');
        }
      };
      fetchData();
    }
  }, [city, country]);

  // Filter logic
  useEffect(() => {
    const applyFilters = () => {
      let filtered = data;

      // Filter by AQI if specified
      if (aqiFilter) {
        filtered = filtered.filter((entry) => entry.aqi <= aqiFilter);
      }

      // Filter by pm25 range
      filtered = filtered.filter(
        (entry) => entry.pm25 >= pm25Filter[0] && entry.pm25 <= pm25Filter[1]
      );

      setFilteredData(filtered);
    };

    applyFilters();
  }, [aqiFilter, pm25Filter, data]);

  return (
    <div className="App">
      <NavBar />
      <h1> Air Quality Dashboard</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <List
          data={filteredData}
          setCity={setCity}
          setCountry={setCountry}
          setAqiFilter={setAqiFilter}
          setPm25Filter={setPm25Filter}
          pm25Filter={pm25Filter}
        />
      )}
    </div>
  );
}

export default App;