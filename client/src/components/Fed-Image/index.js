import React from "react";
import "./style.css";

function FedImage(props) {
    console.log("This will tell you what you actually need to put in src= down there", props.url)
    return (
        <div>
            <img onClick={props.handleNewPhoto} src={props.url} alt={props.credit} />
        </div>
    )
}

export default FedImage;