import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_APP_API_KEY;

function CardDetails() {
  const { city } = useParams(); // Get city from params
  const [detailData, setDetailData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      console.log("Fetching details for:", city); 
      try {
        const response = await fetch(`https://api.weatherbit.io/v2.0/current/airquality?city=${city}&key=${API_KEY}`);
        if (!response.ok) {
          const errorText = await response.text();
          console.error('Fetch error:', errorText);
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        console.log(result); 
        setDetailData(result);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchDetails();
  }, [city]); 

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!detailData) {
    return <p>Loading...</p>;
  }

  if (!detailData.data || detailData.data.length === 0) {
    return <p>No data available</p>;
  }

  const airQualityData = detailData.data[0];

  return (
    <div className="detail-view">
      <p>AQI: {airQualityData.aqi}</p>
      <p>PM2.5: {airQualityData.pm25} µg/m³</p>
      <p>PM10: {airQualityData.pm10} µg/m³</p>
      <p>O3: {airQualityData.o3} µg/m³</p>
      <p>CO: {airQualityData.co} µg/m³</p>
      <p>NO2: {airQualityData.no2} µg/m³</p>
      <p>SO2: {airQualityData.so2} µg/m³</p>
      <p>Pollen Level (Grass): {airQualityData.pollen_level_grass}</p>
      <p>Pollen Level (Tree): {airQualityData.pollen_level_tree}</p>
      <p>Pollen Level (Weed): {airQualityData.pollen_level_weed}</p>
      <p>Predominant Pollen Type: {airQualityData.predominant_pollen_type}</p>
      <p>Mold Level: {airQualityData.mold_level}</p>
    </div>
  );
}

export default CardDetails;
