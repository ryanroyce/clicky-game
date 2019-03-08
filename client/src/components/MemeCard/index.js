import React from "react";
import "./style.css";

function MemeCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={ () => props.selectMeme(props.id)} className="remove" />
      </div>
      <div className="content">
       {props.name}
      </div>
    </div>
  );
};

export default MemeCard;
