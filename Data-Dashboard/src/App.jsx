import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import List from './components/List';
import NavBar from './components/NavBar';
import DetailView from './components/DetailView';
import Card from './components/Card'; 
import AirQualityChart from './components/AirQualityChart';
import './App.css';
import AirQualityChart from './components/AirQualityChart';

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
    const fetchAirQualityData = async () => {
      if (city && country) {
        try {
          const response = await fetch(
            `https://api.weatherbit.io/v2.0/forecast/airquality?city=${city}&country=${country}&key=${API_KEY}`
          );
          if (!response.ok) throw new Error('Network response was not ok');
          const result = await response.json();
          setData(result.data);
          setFilteredData(result.data);
        } catch (err) {
          setError('Could not fetch data: ' + err.message);
        }
      }
    };
    fetchAirQualityData();
  }, [city, country]);

  useEffect(() => {
    const applyFilters = () => {
      const filtered = data.filter((entry) => {
        const meetsAqiCriteria = aqiFilter ? entry.aqi <= aqiFilter : true;
        const meetsPm25Criteria = entry.pm25 >= pm25Filter[0] && entry.pm25 <= pm25Filter[1];
        return meetsAqiCriteria && meetsPm25Criteria;
      });
      setFilteredData(filtered);
    };
    applyFilters();
  }, [aqiFilter, pm25Filter, data]);

  const totalItems = filteredData.length;
  const meanAQI = totalItems > 0 ? (filteredData.reduce((sum, entry) => sum + entry.aqi, 0) / totalItems).toFixed(2) : 0;
  const pm25Values = filteredData.map((entry) => entry.pm25).sort((a, b) => a - b);
  const medianPM25 = totalItems > 0 ? pm25Values[Math.floor(totalItems / 2)] : 0;

  return (
    <>
      <NavBar />
<<<<<<< HEAD
      {error && <div className="error">{error}</div>}
      <Card totalItems={totalItems} meanAQI={meanAQI} medianPM25={medianPM25} />
      
        {filteredData.length > 0 && <AirQualityChart data={filteredData} />}
       
      <Routes>
        <Route path="/" element={<List data={filteredData} setCity={setCity} setCountry={setCountry} setAqiFilter={setAqiFilter} setPm25Filter={setPm25Filter} pm25Filter={pm25Filter} />} />
        <Route path="/detail/:id" element={<DetailView data={filteredData} />} />
      </Routes>
    </>
=======
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
          {filteredData.length > 0 && <AirQualityChart data={filteredData} />}
        </>
      )}
    </div>
>>>>>>> 4160bd7ff80c6cc06f830f20a14200d8a81700d5
  );
}

export default App;
