import React from "react";
import "./style.css";

function LandingRow(props){
    return (
        <div className="row block-container" {...props}>
            {props.children}
        </div>
    )
}

export default LandingRow;