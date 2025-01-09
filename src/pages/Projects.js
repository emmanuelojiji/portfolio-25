import "./Projects.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "warehouse reporting",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet rutrum enim. Donec vitae metus accumsan, tincidunt ante sit amet, aliquam erat. Maecenas scelerisque facilisis posuere. Nam eu ex eget arcu suscipit lobortis.",
      url: "/warehouse-reporting",
    },

    {
      title: "Usability session",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet rutrum enim. Donec vitae metus accumsan, tincidunt ante sit amet, aliquam erat. Maecenas scelerisque facilisis posuere. Nam eu ex eget arcu suscipit lobortis.",
      url: "/usability-session",
    },

    {
      title: "Notes",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet rutrum enim. Donec vitae metus accumsan, tincidunt ante sit amet, aliquam erat. Maecenas scelerisque facilisis posuere. Nam eu ex eget arcu suscipit lobortis.",
      url: "/notes",
    },

    {
      title: "GOV UK",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet rutrum enim. Donec vitae metus accumsan, tincidunt ante sit amet, aliquam erat. Maecenas scelerisque facilisis posuere. Nam eu ex eget arcu suscipit lobortis.",
      url: "/notes",
    },

    {
      title: "Nandos",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet rutrum enim. Donec vitae metus accumsan, tincidunt ante sit amet, aliquam erat. Maecenas scelerisque facilisis posuere. Nam eu ex eget arcu suscipit lobortis.",
      url: "/notes",
    },

    {
      title: "Notes",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet rutrum enim. Donec vitae metus accumsan, tincidunt ante sit amet, aliquam erat. Maecenas scelerisque facilisis posuere. Nam eu ex eget arcu suscipit lobortis.",
      url: "/notes",
    },
  ];

  return (
    <>
      <div className="billboard">
        <h1 className="billboard-title">
          Combining research and action to deliver <br></br>thoughtful digital
          solutions.
        </h1>
      </div>

      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-container">
            <Link to={project.url} className="project-title">
              {project.title}
            </Link>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
