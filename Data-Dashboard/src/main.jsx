import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import App from './App.jsx';
import './index.css';
<<<<<<< HEAD
=======
import NavBar from './components/NavBar.jsx';
import CardDetails from './components/CardDetails.jsx';
>>>>>>> 4160bd7ff80c6cc06f830f20a14200d8a81700d5

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
<<<<<<< HEAD
      <Routes>
        <Route path="*" element={<App />} />
=======
      <NavBar />
      <Routes>
        <Route index element={<App />} />
        <Route path="/CardDetails/:city" element={<CardDetails />} />
>>>>>>> 4160bd7ff80c6cc06f830f20a14200d8a81700d5
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
<<<<<<< HEAD
              <Link to="/" style={{ color: "white" }}>Back to Home</Link>
=======
              <Link style={{ color: "white" }} to="/">
                Back to Home
              </Link>
>>>>>>> 4160bd7ff80c6cc06f830f20a14200d8a81700d5
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
<<<<<<< HEAD
  </StrictMode>
);

=======
  </StrictMode>,
);
>>>>>>> 4160bd7ff80c6cc06f830f20a14200d8a81700d5
