import React from "react";
import "./style.css";

export function formListItem(props) {
    return (
        <div className="form-row" {...props}>
            <button type="button" className="btn btn-block btn-success">
                {props.children}
            </button>
        </div>
    )
}

export function SideTaskBar(props) {
    return (
        <form className="taskbar" {...props}>
            {props.children}
        </form>   
    )
}
// --------------------

export function SideTaskBarNew(props) {
    return (
        <div>
            <FormListItemNew
            text={props.text}/>
        </div>
    )
}

export function FormListItemNew(props) {
    return (
        <div className="form-row">
            <button type="button" className="btn btn-block btn-success">
                {props.text}
            </button>
        </div>
    )
}