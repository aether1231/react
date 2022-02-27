import React from "react";
import "./Card.css";

const Card = (props) => {
  const classes = `card ${props.className}`;

  return <div class={classes}>{props.children}</div>;
};

export default Card;
