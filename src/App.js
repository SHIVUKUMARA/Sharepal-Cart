import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Details from "./Components/Orders/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
