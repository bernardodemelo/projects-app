import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "https://planet-json-server-backend.adaptable.app";

function EditPlanetPage() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API_URL}/planets/${id}`)
      .then((response) => {
        setName(response.data.name);
        setDescription(response.data.description);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, description };

    axios
      .put(`${API_URL}/planets/${id}`, data)
      .then(() => {
        navigate("/planets");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletePlanet = () => {
    axios
      .delete(`${API_URL}/planets/${id}`)
      .then(() => {
        navigate("/planets");
      })
      .catch((error) => console.log(error));
  };

  return (
    <article>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Update Project</button>
      </form>
      <button onClick={deletePlanet}>Delete Project</button>
    </article>
  );
}

export default EditPlanetPage;
