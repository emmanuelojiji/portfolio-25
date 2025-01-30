import "./Projects.scss";

import { useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "warehouse reporting",
      desc: "A tool to help managers track and improve their employee performance.",
      url: "/warehouse-reporting",
      type: ["design", "company"],
    },

    {
      title: "Usability session",
      desc: "Driving product insights through targeted usability testing.",
      url: "/usability-session",
      type: ["design", "company"],
    },

    {
      title: "Notes V2",
      desc: "Streamlining workplace communication for seamless job order management.",
      url: "/notes",
      type: ["design", "company"],
    },

    {
      title: " UI Prototype with Animated Transitions",
      desc: "Developed a React prototype to demonstrate UI behaviours for stakeholder feedback",
      url: "https://eua-refresh.vercel.app/",
      type: ["front-end", "company"],
    },

    {
      title: "GOV UK",
      desc: "A COVID-19 assistance app for streamlined public support.",
      url: "https://govuk.vercel.app/",
      type: ["front-end", "personal"],
    },

    {
      title: "Netflix Recommend",
      desc: "An interactive recommendation tool for personalised streaming experiences.",
      url: "https://n-recommend.vercel.app/",
      type: ["front-end", "personal"],
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
        {projects.map((project) => (
          <Link to={project.url}>
            <div className="project-container">
              <div className="type-container">
                {project.type.map((type) => (
                  <span className="project-type">{type}</span>
                ))}
              </div>

              <h3 className="project-title">{project.title}</h3>

              <p>{project.desc}</p>
              <p className="read">Read</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Projects;
