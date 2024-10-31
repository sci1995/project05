import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import App from './App.jsx';
import './index.css';
import NavBar from './components/NavBar.jsx';
import CardDetails from './components/CardDetails.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route index element={<App />} />
        <Route path="/CardDetails/:city" element={<CardDetails />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
              <Link style={{ color: "white" }} to="/">
                Back to Home
              </Link>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);