// import React from 'react';
// import SearchBar from './SearchBar';

// function List({ data, setCity, setCountry, setAqiFilter, setPm25Filter, pm25Filter }) {
//   return (
//     <div className="list-container">
//       <SearchBar setCity={setCity} setCountry={setCountry} />

//       <div className="filters">
//         <div>
//           <label>AQI Filter (Max AQI): </label>
//           <input
//             type="number"
//             placeholder="Enter max AQI"
//             onChange={(e) => setAqiFilter(e.target.value)}
//           />
//         </div>
//         <div>
//           <label>PM2.5 Range: </label>
//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={pm25Filter[0]}
//             onChange={(e) => setPm25Filter([parseInt(e.target.value), pm25Filter[1]])}
//           />
//           <input
//             type="range"
//             min="0"
//             max="100"
//             value={pm25Filter[1]}
//             onChange={(e) => setPm25Filter([pm25Filter[0], parseInt(e.target.value)])}
//           />
//           <span>{`Range: ${pm25Filter[0]} - ${pm25Filter[1]}`}</span>
//         </div>
//       </div>

//       <div className="list">
//         {data.length > 0 ? (
//           data.map((entry, index) => (
//             <div key={index} className="list-item">
//               <h3>{new Date(entry.timestamp_local).toLocaleString()}</h3>
//               <p>AQI: {entry.aqi}</p>
//               <p>O3: {entry.o3} µg/m³</p>
//               <p>PM2.5: {entry.pm25} µg/m³</p>
//               <p>CO: {entry.co} µg/m³</p>
//             </div>
//           ))
//         ) : (
//           <p>No data available</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default List;

import React from 'react';
import { Outlet, Link } from "react-router-dom";
import SearchBar from './SearchBar';
import Filter from './Filter';
import { Link } from 'react-router-dom';

const List = ({ data, setCity, setCountry, setAqiFilter, setPm25Filter, pm25Filter }) => {
  return (
    <div className="list-container">
      <SearchBar setCity={setCity} setCountry={setCountry} />
      <Filter setAqiFilter={setAqiFilter} setPm25Filter={setPm25Filter} pm25Filter={pm25Filter} />

   
      <div className="list">
<<<<<<< HEAD
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
=======
        {data.length > 0 ? (
          data.map((entry, index) => (
            <Link to={`/CardDetails/${entry.city}`} key={index} className="list-item">
              <h3>{new Date(entry.timestamp_local).toLocaleString()}</h3>
              <p>AQI: {entry.aqi}</p>
              <p>O3: {entry.o3} µg/m³</p>
              <p>PM2.5: {entry.pm25} µg/m³</p>
              <p>CO: {entry.co} µg/m³</p>
            </Link>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
>>>>>>> 4160bd7ff80c6cc06f830f20a14200d8a81700d5
    </div>
  );
};

export default List;
<<<<<<< HEAD




          
=======
>>>>>>> 4160bd7ff80c6cc06f830f20a14200d8a81700d5
