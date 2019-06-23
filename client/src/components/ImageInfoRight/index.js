import React from "react";
import "./style.css";

function ImageInfoRight(props) {
    return (
        <div className="container-fluid">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="info-container">
                <h2>{props.title}</h2>
                <p>{props.info}</p>
            </div>
        </div>
    )
}

export default ImageInfoRight;