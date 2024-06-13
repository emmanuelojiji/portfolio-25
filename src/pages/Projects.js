import "./Projects.scss";
import Toolbar from "../components/Toolbar";
import Card from "../components/Card";
import data from "../data.js";
import { useState } from "react";

const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");

  const [projects, setProjects] = useState(data);

  return (
    <div className="Projects">
      <h1 className="title text-weight-bold text-medium">Portfolio</h1>
      <Toolbar
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
        projects={projects}
        setProjects={setProjects}
      />

      <div className="projects-container">
        <div className="projects-container-inner">
          {projects.map((project) => (
            <Card
              name={project.name}
              desc={project.desc}
              src={project.img}
              id={project.url}
              available={project.available}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
