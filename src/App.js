import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Projects from "./pages/Projects.js";
import Header from "./components/Header";
import WarehouseReporting from "./pages/WarehouseReporting";
import UsabilitySession from "./pages/UsabilitySession";
import Notes from "./pages/Notes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Projects />} />
          <Route path="/warehouse-reporting" element={<WarehouseReporting />} />
          <Route path="/usability-session" element={<UsabilitySession />} />
          <Route path="/notes" element={<Notes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
