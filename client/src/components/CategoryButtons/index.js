import React from "react";
import "./style.css";

export function UserHomeCategory(props) {
    return (
        <div className="w-50 text-center userhome-category">
            <h2>{props.title}</h2>
        </div>
    )
}

export function ImageSourceCategory(props) {
    return (
        <div className="col-sm-12 col-md-6 text-center img-source" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <h2>{props.title}</h2>
            <p>{props.info}</p>
        </div>
    )
}

