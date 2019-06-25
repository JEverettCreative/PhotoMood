import React from "react";
import "./style.css";

function CategoryButton(props) {
    return (
        <div className="container col-md-6 col-sm-12 text-center category" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
            <h2>{props.title}</h2>
        </div>
    )
}

export default CategoryButton;