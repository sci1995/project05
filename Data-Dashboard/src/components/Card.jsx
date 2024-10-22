import React from 'react';

function Card({ entry }) {
  return (
    <div className="card">
      <h3>{new Date(entry.timestamp_local).toLocaleString()}</h3>
      <p>AQI: {entry.aqi}</p>
      <p>O3: {entry.o3} µg/m³</p>
      <p>PM2.5: {entry.pm25} µg/m³</p>
      <p>CO: {entry.co} µg/m³</p>
    </div>
  );
}

export default Card;