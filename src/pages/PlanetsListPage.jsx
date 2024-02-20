import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const API_URL = "https://planet-json-server-backend.adaptable.app";

function PlanetsListPage() {
  const [planets, setplanets] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/planets`)
      .then((response) => setplanets(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {planets &&
        planets.map((planet) => {
          return (
            <div key={planet.id}>
              <Link to={`/planets/${planet.id}`}>
                <img src={planet.image}></img>
                <h3>{planet.name}</h3>
              </Link>
              <Link to={`/edit-planet/${planet.id}`}>
                <p>Edit planet</p>
              </Link>
            </div>
          );
        })}
    </div>
  );
}

export default PlanetsListPage;
