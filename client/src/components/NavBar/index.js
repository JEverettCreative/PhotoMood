import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Button from "../Button";


function NavBar(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            PhotoMood
        </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                        to="/createproject"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/createproject"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        >
                        Start Mood Board
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/explore"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/explore"
                            ? "nav-link active"
                            : "nav-link"
                        }
                        >
                        User Galleries
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/currentprojects"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/currentprojects" 
                            ? "nav-link active" 
                            : "nav-link"
                        }
                        >
                        Current Projects
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                        to="/gallery"
                        className={
                            window.location.pathname === "/" || window.location.pathname === "/gallery" 
                            ? "nav-link active" 
                            : "nav-link"
                        }
                        >
                        Your Gallery
                        </Link>
                    </li>
                    {props.children}
                </ul>
                
            </div>
        </nav>
    )
}

export default NavBar;