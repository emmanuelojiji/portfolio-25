import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Project from "./pages/Project";
import Projects from "./pages/Projects.js";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
        <footer>Designed & Built by Emmanuel</footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
