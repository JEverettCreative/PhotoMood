import React, { Component } from "react";
import FedImage from "../components/Fed-Image";
import Unsplash from "../utils/API/unsplash";

class Inspiration extends Component {

    state = {
        results: [],
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
    

    // handleNewPhoto = event => {
    //     event.preventDefault();
    //     Unsplash.getRandomPhoto()
    //         .then(res => {
    //             if (res.data.status === "error") {
    //                 throw new Error(res.data.message);
    //             }
    //             this.setState({ results: res.data, error: "" })
    //         })
    //         .catch(err => this.setState({ error: err.message }));
    // };


    render() {
        return (
            <div>
                <div className="jumbotron">
                    Testing API
                </div>
                <FedImage 
                    handleNewPhoto = {this.handleNewPhoto}
                    url = {JSON.stringify(this.state.results.urls)}
                    credit = {JSON.stringify(this.state.results.user)}
                    />
            </div>
        )
    }
}

export default Inspiration;