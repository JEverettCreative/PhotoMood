import React from "react";
import "./style.css";

export function Input(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <input type="text" className="form-control" {...props} />
        </div>
    )
}

export function DropSelect(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <select className="form-control" {...props}>
                <option>{props.option1}</option>
                <option>{props.option2}</option>
                <option>{props.option3}</option>
                <option>{props.option4}</option>
            </select>
        </div>
    )
}

export function FormButton(props) {
    return (
        <div className="form-group">
            <button {...props} className="btn btn-success">
                {props.children}
            </button>
        </div>
    )
}