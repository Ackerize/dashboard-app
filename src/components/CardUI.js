import React from "react";
import { useHistory } from "react-router-dom";
import "./card-style.css";

const CardUI = ({ imgSrc, title, option, url, description }) => {
  const history = useHistory();
  const handleClick = () => history.push(`/${url}`);

  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img src={imgSrc} alt="Image 1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">{description}</p>
        <a href="" onClick={handleClick} className="btn btn-outline-success">
          Ir a {option}
        </a>
      </div>
    </div>
  );
};

export default CardUI;
