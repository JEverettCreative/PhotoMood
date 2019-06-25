import React from "react";
import "./style.css";

function Avatar(props) {

    return (
        <div className="avatar">
            <img className="avatar-img" src={props.avatar} alt={props.name} />
        </div>
    )
}

export default Avatar;