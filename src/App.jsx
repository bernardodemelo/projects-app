import './App.css';
/* PACKAGES */
import { Routes, Route } from "react-router-dom";

/* PAGES */
import PlanetsListPage from "./pages/PlanetsListPage";
import PlanetDetailsPage from "./pages/PlanetsDetailsPage";
import AddPlanetPage from "./pages/AddPlanet";
import EditPlanetPage from "./pages/EditPlanetPage";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<PlanetsListPage />} />
        <Route path="/planets/:id" element={<PlanetDetailsPage />} />
        <Route path="/add-planet" element={<AddPlanetPage />} />
        <Route path="/edit-planet/:id" element={<EditPlanetPage />} />
      </Routes>
    </main>
  );
}

export default App
