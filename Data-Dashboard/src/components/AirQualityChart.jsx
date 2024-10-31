import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js'; // Import Chart.js and registerables

// Register all necessary components, including scales
Chart.register(...registerables);

const AirQualityChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => new Date(entry.timestamp_local).toLocaleString()),
    datasets: [
      {
        label: 'AQI',
        data: data.map(entry => entry.aqi),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1
      }
    ]
  };

  return <Line data={chartData} />;
};

export default AirQualityChart;