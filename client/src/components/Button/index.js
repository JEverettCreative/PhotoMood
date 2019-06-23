import React from "react";
import "./style.css";

function Button(props) {
  return (
    <button onClick={props.onClick} className={`btn btn-outline-success`} {...props} />
  );
}

export default Button;
