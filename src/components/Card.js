import "./Card.scss";

import { Link } from "react-router-dom";

const Card = ({ name, desc, id }) => {
  return (
    <Link to={`/project/${id}`}>
      <div className="Card">
        <div className="thumbnail"></div>
        <h3 className="text-small">{name}</h3>
        <p className="text-small text-grey">{desc}</p>
      </div>
    </Link>
  );
};

export default Card;
