import React from "react";
import "./style.css";


export function LandingImage(props) {
    return (
       
            <div className="img-container landing-info">
                {props.children}
            </div>
         
    )
}

export function LandingInfo(props){
    return (
        <div className="info-container landing-info">
            {props.children}
        </div>
    )
}
