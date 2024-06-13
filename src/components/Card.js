import "./Card.scss";

import { Link } from "react-router-dom";

const Card = ({ name, desc, id, src, available }) => {
  return (
    <Link to={`/project/${id}`}>
      <div className={`Card ${available ? "available" : "not-available"}`}>
        <div className="thumbnail">
          {available && <img src={src} />}
          {!available && (
            <div className="coming-soon">
              <div className="coming-soon-pill">Coming soon</div>
            </div>
          )}
        </div>

        <h3 className="text-small">{name}</h3>
        <p className="text-small text-grey">{desc}</p>
      </div>
    </Link>
  );
};

export default Card;
