import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Schedule from "./components/Schedule";
import ShowDetails from "./components/ShowDetail";
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="app-title">TV Schedule App</h1>
        <Routes>
          <Route path="/" element={<Schedule />} />
          <Route path="/show/:id" element={<ShowDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
