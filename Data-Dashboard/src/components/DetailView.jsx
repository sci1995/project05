import React from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

const DetailView = ({ data }) => {
  const { id } = useParams();
  
  // Find entry by matching timestamp_utc instead of array index
  const entry = data.find((entry) => entry.timestamp_utc === id);

  // Check if the entry exists
  if (!entry) {
    return <p>Data not found</p>;
  }

  const { aqi, o3, so2, no2, pm10, pm25, co, timestamp_local } = entry;

  // Prepare chart data
  const chartData = {
    labels: ['O3', 'SO2', 'NO2', 'PM10', 'PM2.5', 'CO'],
    datasets: [
      {
        label: 'Concentrations (µg/m³)',
        data: [o3, so2, no2, pm10, pm25, co],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="detail-view">
      <h2>Details for {new Date(timestamp_local).toLocaleString()}</h2>
      <p>AQI: {aqi}</p>
      <p>O3: {o3} µg/m³</p>
      <p>SO2: {so2} µg/m³</p>
      <p>NO2: {no2} µg/m³</p>
      <p>PM10: {pm10} µg/m³</p>
      <p>PM2.5: {pm25} µg/m³</p>
      <p>CO: {co} µg/m³</p>
      <Line data={chartData} />
    </div>
  );
};

export default DetailView;

