import React from "react";
import "../App.css";

const Button = (props) => {
  return (
    <div className="button">
      <button onClick={props.handleClick}>Roll</button>
    </div>
  );
};

export default Button;
