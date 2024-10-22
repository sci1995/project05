import React from 'react';

function Card({ totalItems, meanAQI, medianPM25 }) {
  return (
    <div className="summary-statistics">
      <div className="statistic-card">
        <h3>🟢 Total Items</h3>
        <p>{totalItems}</p>
        <p>This is the total number of data entries available.</p>
      </div>
      <div className="statistic-card">
        <h3>📊 Mean AQI</h3>
        <p>{meanAQI}</p>
        <p>This represents the average Air Quality Index value.</p>
      </div>
      <div className="statistic-card">
        <h3>🌫️ Median PM2.5</h3>
        <p>{medianPM25}</p>
        <p>This indicates the median level of PM2.5 in the data.</p>
      </div>
    </div>
  );
}

export default Card;