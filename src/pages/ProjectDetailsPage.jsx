import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';


const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function ProjectDetailsPage() {
  const [project, setProject] = useState({})
  // Get my Route Params, so I can use them
  const {id} = useParams();

  useEffect(()=>{
    axios.get(`${API_URL}/projects/${id}`)
    .then((response)=> setProject(response.data))
    .catch((error)=> console.log(error))
  }, []);

  return (
    <div>
        {
            project && <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </div>
        }
    </div>
  )
}

export default ProjectDetailsPage