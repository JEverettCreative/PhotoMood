import React from "react";
import "./style.css";

function FedImage(props) {
    return (
        <div>
            <img onClick={props.handleNewPhoto} src={props.url} alt={props.credit} />
        </div>
    )
}

export default FedImage;