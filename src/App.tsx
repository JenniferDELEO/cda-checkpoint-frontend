import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Continents from "./pages/Continents/Continents";
import Countries from "./pages/Countries/Countries";
import Country from "./pages/Countries/Country";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/continents" element={<Continents />} />
        <Route
          path="/continents/:continent_code/countries"
          element={<Countries />}
        />
        <Route
          path="/continents/:continent_code/countries/:country_code"
          element={<Country />}
        />
      </Routes>
    </>
  );
}

export default App;
