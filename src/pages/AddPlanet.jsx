import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://planet-json-server-backend.adaptable.app/";

function AddPlanetPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const project = { name, description };

    axios
      .post(`${API_URL}/projects`, project)
      .then(() => navigate("/projects"))
      .catch((error) => console.log(error));
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>name</label>
      <input
        value={name}
        name="name"
        type="text"
        required
        onChange={(e) => setName(e.target.value)}
      />
      <label>Description</label>
      <input
        value={description}
        name="description"
        type="text"
        required
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddPlanetPage;
