import "./Card.scss";

import { Link } from "react-router-dom";

const Card = ({ name, desc, id }) => {
  return (
    <Link to={`/project/${id}`}>
      <div className="Card">
        <div className="thumbnail"></div>
        <h3>{name}</h3>
        <p>{desc}</p>
      </div>
    </Link>
  );
};

export default Card;
