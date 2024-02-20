import {useEffect, useState} from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';


const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function EditProjectPage(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get(`${API_URL}/books/${id}`).then((response)=>{
            setTitle(response.data.title);
            setDescription(response.data.description);
        }).catch((error)=> console.log(error))
    }, [])

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const data = {title, description};

        axios.put(`${API_URL}/projects/${id}`, data)
        .then(()=>{
            navigate("/projects");
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const deleteProject = () =>{
        axios.delete(`${API_URL}/projects/${id}` ).then(()=>{
            navigate("/projects");
        })
        .catch((error)=>console.log(error));
    }

    return (
      <article>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
        <button onClick={deleteProject}>Delete Project</button>
      </article>
    );
}

export default EditProjectPage