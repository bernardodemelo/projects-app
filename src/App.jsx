import './App.css';
/* PACKAGES */
import { Routes, Route } from "react-router-dom";

/* PAGES */
import ProjectsListPage from './pages/ProjectsListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import AddProjectPage from './pages/AddProject';
import EditProjectPage from './pages/EditProjectPage';

function App() {

  return (
    <main>
      <Routes>
        <Route path="/projects" element={<ProjectsListPage/>}/>
        <Route path="/projects/:id" element={<ProjectDetailsPage />} />
        <Route path="/add-project" element={<AddProjectPage />}/>
        <Route path="/edit-project/:id" element={<EditProjectPage/>}/>
      </Routes>
    </main>
  )
}

export default App
