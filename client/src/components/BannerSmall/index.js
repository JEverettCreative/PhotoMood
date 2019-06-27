import React from "react";
import "./style.css";

function BannerSmall(props) {
    return (
        <div className="navbar nav text-center justify-content-center banner">
            <h3>{props.heading}</h3>
        </div>
    )
}

export default BannerSmall;