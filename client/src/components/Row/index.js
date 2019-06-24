import React from "react";
import "./style.css";

function Row(props){
    return (
        <div className="row block-container" {...props}>
            {props.children}
        </div>
    )
}

export default Row;