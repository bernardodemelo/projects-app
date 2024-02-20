import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://planet-json-server-backend.adaptable.app";

function PlanetDetailsPage() {
  const [planet, setPlanet] = useState({});
  // Get my Route Params, so I can use them
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${API_URL}/planets/${id}`)
      .then((response) => setPlanet(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      {planet && (
        <div>
          <img src={planet.image} />
          <h3>{planet.name}</h3>
          <p>{planet.description}</p>
          <Link to="/">Back</Link>
        </div>
      )}
    </div>
  );
}

export default PlanetDetailsPage;
