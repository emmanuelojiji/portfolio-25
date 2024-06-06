import "./Toolbar.scss";
import { useEffect, useState } from "react";
import data from "../data";

const Toolbar = ({
  selectedFilter,
  setSelectedFilter,
  projects,
  setProjects,
}) => {
  useEffect(() => {
    console.log("selected filter is " + selectedFilter);
  });

  const handleFilterSelection = (userSelection) => {
    setSelectedFilter(userSelection);

    if (userSelection === "all") {
      setProjects(data);
    } else {
      const filteredProjects = data.filter(
        (project) => project.type === userSelection
      );

      setProjects(filteredProjects);
    }
  };

  const buttons = [
    "all",
    "case_studies",
    "audits",
    "front_end",
    "just_for_fun",
  ];

  return (
    <div className="Toolbar">
      {buttons.map((button) => (
        <button
          className={`${selectedFilter === button && "selected"}`}
          onClick={() => handleFilterSelection(button)}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default Toolbar;
