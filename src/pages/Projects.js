import "./Projects.scss";
import Toolbar from "../components/Toolbar";
import Card from "../components/Card";
import data from "../data.js";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const [projects, setProjects] = useState(data);

  const id = useParams();

  return (
    <>
      <h1>Projects</h1>
      <Toolbar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        projects={projects}
        setProjects={setProjects}
      />

      <div className="projects-container">
        {projects.map((project) => (
          <Card name={project.name} desc={project.desc} id={project.url} />
        ))}
      </div>
    </>
  );
};

export default Projects;
