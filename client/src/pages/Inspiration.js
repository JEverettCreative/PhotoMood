import React, { Component } from "react";
import FedImage from "../components/Fed-Image";
import Unsplash from "../utils/API/unsplash";
import { StarButton, PassButton } from "../components/RoundButton";

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
    

    handleNewPhoto = event => {
        event.preventDefault();
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
                    <div className="jumbotron">
                        Testing API
                    </div>
                    <div className="container justify-content-center">
                        <PassButton />
                        <FedImage 
                            handleNewPhoto = {this.handleNewPhoto}
                            url = {this.state.results.urls.raw + "&fit=fill&fill=solid&fill-color=e9ecef&w=500&h=500"}
                            credit = {this.state.results.user}
                            />
                        <StarButton />
                    </div>
                </div>
            );
        }
        return null;
       
    }
}

export default Inspiration;