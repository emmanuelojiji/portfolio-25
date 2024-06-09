import { useLocation } from "react-router-dom";
import data from "../data.js";
import "./Project.scss"

const Project = () => {
  const location = useLocation();

  const locationSplit = location.pathname.split("/");

  const locationId = locationSplit[2];

  const project = data.filter((data) => data.url === locationId);

  console.log(project);

  return (
    <div className="Project">
      <h1>{project[0].name}</h1>
      {project[0].component}
    </div>
  );
};

export default Project;
