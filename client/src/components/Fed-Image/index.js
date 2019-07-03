import React from "react";
import "./style.css";

function FedImage(props) {
    return (
        <div className="container justify-content-center fed-container">
            <img onClick={props.handleNewPhoto} src={props.url} alt={props.credit} className="fed-img"/>
        </div>
    )
}

export default FedImage;