import React from "react";
import "./style.css";

export function SideTaskBarNew(props) {
    return (
        <div className="taskbar">
            {props.children}
        </div>
    )
}

export function FormListItem(props) {
    return (
        <div className="form-row">
            <button type="button" className="btn btn-block btn-success">
                {props.text}
            </button>
        </div>
    )
}