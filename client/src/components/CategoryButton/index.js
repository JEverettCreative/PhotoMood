import React from "react";
import "./style.css";

function CategoryButton(props) {
    return (
        <div className="w-50 text-center category">
            <h2>{props.title}</h2>
        </div>
    )
}

export default CategoryButton;