import React from 'react';

const Filter = ({ setAqiFilter, setPm25Filter, pm25Filter }) => {
  return (
    <div className="filters">
      <div>
        <label>AQI Filter (Max AQI): </label>
        <input
          type="number"
          placeholder="Enter max AQI"
          onChange={(e) => setAqiFilter(e.target.value)}
        />
      </div>
      <div>
        <label>PM2.5 Range: </label>
        <input
          type="range"
          min="0"
          max="100"
          value={pm25Filter[0]}
          onChange={(e) => setPm25Filter([parseInt(e.target.value), pm25Filter[1]])}
        />
        <input
          type="range"
          min="0"
          max="100"
          value={pm25Filter[1]}
          onChange={(e) => setPm25Filter([pm25Filter[0], parseInt(e.target.value)])}
        />
        <span>{`Range: ${pm25Filter[0]} - ${pm25Filter[1]}`}</span>
      </div>
    </div>
  );
};

export default Filter;
