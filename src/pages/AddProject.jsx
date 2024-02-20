import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function AddProjectPage(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

   const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();

        const project = {title, description};

        axios.post(`${API_URL}/projects`, project)
        .then(()=> navigate("/projects"))
        .catch((error)=> console.log(error));



    }
    return (
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input value = {title} name="title" type="text" required onChange={(e)=> setTitle(e.target.value)}/>
        <label>Description</label>
        <input value = {description} name="description" type="text" required onChange={(e)=> setDescription(e.target.value)} />
        <button type="submit">Add Project</button>
      </form>
    );
}

export default AddProjectPage