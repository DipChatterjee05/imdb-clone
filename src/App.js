import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
    <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/movie/:id" element={<h1>Movie Detail Page</h1>} />
        <Route path="/movies/:type" element={<h1>Movie List Page</h1>} />
        <Route path="/*" element={<h1>Error 404!!!</h1>} />
      </Routes>
    </div>
  );
}

export default App;
