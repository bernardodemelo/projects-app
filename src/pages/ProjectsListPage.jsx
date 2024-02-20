import { useEffect, useState } from "react"; 
import axios from 'axios';
import {Link} from 'react-router-dom';

const API_URL = "http://localhost:3000";

function ProjectsListPage(){
    const [projects, setProjects] = useState([]);

    useEffect(()=>{
        axios.get(`${API_URL}/books`)
        .then((response)=> setProjects(response.data))
        .catch((error)=> console.log(error));
    }, [])

    return(<div>
        {projects && projects.map((project)=>{
            return (
              <div key={project.id}>
                <Link to={`/projects/${project.id}`}>
                  <h3>{project.title}</h3>
                </Link>
                <Link to={`/edit-project/${project.id}`}>
                  <p>Edit Project</p>
                </Link>
              </div>
            );
        })}  
    </div>)
}

export default ProjectsListPage