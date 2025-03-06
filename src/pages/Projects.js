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

  const [workClass, setWorkClass] = useState("hide-work");

  return (
    <>
      <div className="billboard">
        <h1 className="billboard-title">
          Combining research and action to deliver <br></br>thoughtful digital
          solutions.
        </h1>
        <button
          className="work-button"
          onClick={() => setWorkClass("show-work")}
        >
          View Work
        </button>
      </div>

      <div className={`library ${workClass}`}>
        <div class="library-header">
          <p onClick={() => setWorkClass("hide-work")}>Close</p>
        </div>

        <div className="projects-container">
          <div className={`grid-container`}>
            {projects.map((project) => (
              <div className="project-container">
                <h3 className="project-title">{project.title}</h3>

                <p>{project.desc}</p>
                <Link to={project.url}>
                  <p className="read">Read</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
