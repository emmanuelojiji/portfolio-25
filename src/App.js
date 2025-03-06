import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";

import Projects from "./pages/Projects.js";
import Header from "./components/Header";
import WarehouseReporting from "./pages/WarehouseReporting";
import UsabilitySession from "./pages/UsabilitySession";
import Notes from "./pages/Notes";
import { useState } from "react";

function App() {
  const [workClass, setWorkClass] = useState("hide-work");
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <Projects workClass={workClass} setWorkClass={setWorkClass} />
            }
          />
          <Route
            path="/warehouse-reporting"
            element={
              <WarehouseReporting
                workClass={workClass}
                setWorkClass={setWorkClass}
              />
            }
          />
          <Route
            path="/usability-session"
            element={
              <UsabilitySession
                workClass={workClass}
                setWorkClass={setWorkClass}
              />
            }
          />
          <Route
            path="/notes"
            element={
              <Notes workClass={workClass} setWorkClass={setWorkClass} />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
