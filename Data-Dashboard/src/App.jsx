import React, { useState, useEffect } from 'react';
import List from './components/List';
import NavBar from './components/NavBar';
import Card from './components/Card'; 
import './App.css';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [aqiFilter, setAqiFilter] = useState('');
  const [pm25Filter, setPm25Filter] = useState([0, 50]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city && country) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.weatherbit.io/v2.0/forecast/airquality?city=${city}&country=${country}&key=${API_KEY}`
          );
          const result = await response.json();
          setData(result.data);
          setFilteredData(result.data);
        } catch (err) {
          setError('Could not fetch data');
        }
      };
      fetchData();
    }
  }, [city, country]);

  useEffect(() => {
    const applyFilters = () => {
      let filtered = data;

      if (aqiFilter) {
        filtered = filtered.filter((entry) => entry.aqi <= aqiFilter);
      }

      filtered = filtered.filter(
        (entry) => entry.pm25 >= pm25Filter[0] && entry.pm25 <= pm25Filter[1]
      );

      setFilteredData(filtered);
    };

    applyFilters();
  }, [aqiFilter, pm25Filter, data]);

 
  const totalItems = filteredData.length;
  const meanAQI =
    totalItems > 0
      ? (
          filteredData.reduce((sum, entry) => sum + entry.aqi, 0) / totalItems
        ).toFixed(2)
      : 0;
  const pm25Values = filteredData.map((entry) => entry.pm25).sort((a, b) => a - b);
  const medianPM25 =
    totalItems > 0
      ? pm25Values[Math.floor(totalItems / 2)]
      : 0;

  return (
    <div className="App">
      <NavBar />
      <h1>Air Quality Dashboard</h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <Card
            totalItems={totalItems}
            meanAQI={meanAQI}
            medianPM25={medianPM25}
          />
          <List
            data={filteredData}
            setCity={setCity}
            setCountry={setCountry}
            setAqiFilter={setAqiFilter}
            setPm25Filter={setPm25Filter}
            pm25Filter={pm25Filter}
          />
        </>
      )}
    </div>
  );
}

export default App;