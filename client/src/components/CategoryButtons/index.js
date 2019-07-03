import React from "react";
import "./style.css";

export function UserHomeCategory(props) {
    return (
        <button className="w-50 text-center userhome-category" onClick={props.onClick}>
            <h2>{props.title}</h2>
        </button>
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

