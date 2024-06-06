import { useLocation } from "react-router-dom";
import data from "../data.js";

const Project = () => {
  const location = useLocation();

  const locationSplit = location.pathname.split("/");

  const locationId = locationSplit[2];

  const project = data.filter((data) => data.url === locationId);

  console.log(project);

  return (
    <>
      <h1>{project[0].name}</h1>
    </>
  );
};

export default Project;
