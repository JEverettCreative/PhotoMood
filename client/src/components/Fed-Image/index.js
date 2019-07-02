import React from "react";
import "./style.css";

function FedImage(props) {
    console.log("This will tell you what you actually need to put in src= down there", props.url)
    return (
        <div className="container justify-content-center">
            <img onClick={props.handleNewPhoto} src={props.url} alt={props.credit} className="fed-img"/>
        </div>
    )
}

export default FedImage;