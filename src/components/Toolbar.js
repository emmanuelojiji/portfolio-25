import "./Toolbar.scss";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import data from "../data";

const Toolbar = ({
  selectedFilter,
  setSelectedFilter,
  projects,
  setProjects,
}) => {
  const [buttonWidth, setButtonWidth] = useState(0);
  const [sliderPos, setSliderPos] = useState(0);

  const buttonRefs = useRef({});

  useEffect(() => {
    console.log("selected filter is " + selectedFilter);
  }, [selectedFilter]);

  useLayoutEffect(() => {
    const button = selectedFilter;
    const currentButtonWidth = buttonRefs.current[button]?.offsetWidth || 0;
    const currentButtonLeft = buttonRefs.current[button]?.offsetLeft || 0;
    setSliderPos(currentButtonLeft);
    setButtonWidth(currentButtonWidth);
  }, [selectedFilter]);

  const handleFilterSelection = (button) => {
    setSelectedFilter(button);

    if (button === "all") {
      setProjects(data);
    } else {
      const filteredProjects = data.filter(
        (project) => project.type === button
      );
      setProjects(filteredProjects);
    }
  };

  const buttons = [
    "all",
    "case_studies",
    "audits",
    "front_end",
    "documents",
    "just_for_fun",
  ];

  return (
    <div className="Toolbar">
      <div
        className="slider"
        style={{ width: buttonWidth, left: sliderPos }}
      ></div>
      {buttons.map((button) => {
        const buttonSplit = button.replaceAll("_", " ");

        const projectCount = data.filter(
          (project) => project.type === button
        ).length;

        return (
          <button
            key={button}
            ref={(el) => (buttonRefs.current[button] = el)}
            className={`toolbar-button ${
              selectedFilter === button ? "selected" : ""
            }`}
            onClick={() => handleFilterSelection(button)}
            onMouseEnter={() => {
              const hoveredWidth = buttonRefs.current[button]?.offsetWidth || 0;
              console.log("hovered width is: " + hoveredWidth);
            }}
          >
            {buttonSplit}
          </button>
        );
      })}
    </div>
  );
};

export default Toolbar;
