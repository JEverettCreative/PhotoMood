import React from "react";
import "./style.css";

export function StarButton(props) {
    return (
        <span onClick={props.handleStarButton}><i className="fas fa-star fa-7x round-btn"></i></span>
    )
}

export function PassButton(props) {
    return (
        <span onClick={props.handlePassButton}><i className="fas fa-times fa-7x round-btn"></i></span>
    )
}