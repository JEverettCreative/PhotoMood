import React, { Component } from "react";
import FedImage from "../components/Fed-Image";
import Unsplash from "../utils/API/unsplash";
import { StarButton, PassButton } from "../components/RoundButton";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import { Link } from "react-router-dom";

class Inspiration extends Component {

    state = {
        results: {},
        error: ""
    };

    componentDidMount() {
        Unsplash.getRandomPhoto()
        .then(res => {
            if (res.data.status === "error") {
                throw new Error(res.data.message);
            }
            console.log(res.data);
            this.setState({ results: res.data, error: "" });
        })
        .catch(err => this.setState({ error: err.message }));
      }   
    

    handleStarButton = event => {
        event.preventDefault();
        // Add code to save photo info to DB
        Unsplash.getRandomPhoto()
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data, error: "" })
            })
            .catch(err => this.setState({ error: err.message }));
    };

    handlePassButton = event => {
        event.preventDefault();
        // Add code to save photo info to DB
        Unsplash.getRandomPhoto()
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data, error: "" })
            })
            .catch(err => this.setState({ error: err.message }));
    };


    render() {
        console.log(this.state.results);
        if (this.state.results.urls) {
            return (
                <div>
                    <NavBar>
                        <Button style={{ display: "inline" }}>
                            <Link style={{ color: "inherit" }}
                                to="/userhome"
                                className={
                                    window.location.pathname === "/" || window.location.pathname === "/userhome"
                                }
                                >
                                <span><i class="fas fa-user fa-lg"></i></span>
                        </Link>
                        </Button>
                    </NavBar> 
                    <div className="container justify-content-center">
                        <PassButton 
                            handlePassButton = {this.handlePassButton}
                            />
                        <FedImage 
                            url = {this.state.results.urls.raw + "&fit=fill&fill=solid&fill-color=e9ecef&w=500&h=500"}
                            credit = {this.state.results.user}
                            />
                        <StarButton 
                            handleStarButton = {this.handleStarButton}
                            />
                    </div>
                </div>
            );
        }
        return null;
       
    }
}

export default Inspiration;