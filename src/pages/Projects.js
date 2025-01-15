import "./Projects.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "warehouse reporting",
      desc: "A tool to help managers track and improve their employee performance.",
      url: "/warehouse-reporting",
    },

    {
      title: "Usability session",
      desc: "Driving product insights through targeted usability testing.",
      url: "/usability-session",
    },

    {
      title: "Notes",
      desc: "Streamlining workplace communication for seamless job order management.",
      url: "/notes",
    },

    {
      title: "GOV UK",
      desc: "A COVID-19 assistance app for streamlined public support.",
      url: "https://govuk.vercel.app/",
    },

    {
      title: "Nandos",
      desc: "A Nando’s cocktail launch concept with a bold and interactive design.",
      url: "https://nandos.vercel.app/",
    },

    {
      title: "Netflix Recommend",
      desc: "An interactive recommendation tool for personalised streaming experiences.",
      url: "https://n-recommend.vercel.app/",
    },
  ];

  const [hoveredArea, setHoveredArea] = useState("");

  return (
    <>
      <div className="billboard">
        <h1 className="billboard-title">
          Combining research and action to deliver <br></br>thoughtful digital
          solutions.
        </h1>
        <p>
          I believe great design begins with understanding people—their needs,
          their challenges, and the opportunities that lie within them. It’s not
          just about solving problems, but also creating opportunities and
          opening up new possibilities.
        </p>
      </div>

      <div className={`projects-container ${hoveredArea}`}>
        <div
          className="left-hover"
          onMouseOver={() => setHoveredArea("left")}
          onMouseOut={() => setHoveredArea("")}
        />
        {projects.map((project) => (
          <div className="project-container">
            <Link to={project.url} className="project-title" target="_blank">
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
