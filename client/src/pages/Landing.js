import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import LandingHero from "../components/LandingHero";
import { LandingInfo, LandingImage } from "../components/LandingBlocks";
import LandingRow from "../components/LandingRow";
import Button from "../components/Button";
import ReactModal from "react-modal";
import queryString from "query-string";
ReactModal.setAppElement('#modal');

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Landing extends Component {

    constructor () {
        super();
        this.state = {
          showModal: false
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
      }

    componentDidMount() {
        console.log("Component mounted");
    }

    handleOpenModal () {
        this.setState({ showModal: true });
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }
    // Code for storing user token in Local Storage after sign-in
    componentWillMount() {
        var query = queryString.parse(this.props.location.search);
        if (query.token) {
            window.localStorage.setItem("jwt", query.token);
            this.props.history.push("/");
        }
    }


    render () {
        return (
            <div>
            <NavBar>
                <Button style={{ display: "inline" }}>
                    <Link style={{ color: "inherit" }}
                        to="/userhome"
                        >
                        <span><i className="fas fa-user fa-lg"></i></span>
                </Link>
                </Button>
            </NavBar> 
            <LandingHero />
            <LandingRow>
                <LandingImage>
                    <img src="./Imgs/Landing_InfoRight_1.png" alt="redheaded woman on green background" />
                </LandingImage>
                <LandingInfo>
                    <h1>Get Inspired</h1>
                </LandingInfo>
            </LandingRow>
            <LandingRow>
                <LandingInfo>
                    <h1>Create A Mood Board</h1>
                </LandingInfo>
                <LandingImage>
                    <img src="./Imgs/Landing_InfoRight_1.png" alt="redheaded woman on green background" />
                </LandingImage>
            </LandingRow>
            <LandingRow>
                <LandingImage>
                    <img src="./Imgs/Landing_InfoRight_1.png" alt="redheaded woman on green background" />
                </LandingImage>
                <LandingInfo>
                    <h1>Plan Your Photoshoot</h1>
                </LandingInfo>
            </LandingRow>
            <LandingRow>
                <LandingInfo>
                    <h1>Share Your Work</h1>
                </LandingInfo>
                <LandingImage>
                    <img src="./Imgs/Landing_InfoRight_1.png" alt="redheaded woman on green background" />
                </LandingImage>
            </LandingRow>
            <LandingRow style= {{ borderBottom: "none", height: 300 }}>
                <Button style={{ margin: "auto" }}
                    onClick={this.handleOpenModal}>
                    {/* Add onClick and reformat */}
                    Create Free Account
                </Button>
            </LandingRow>
            <ReactModal 
                isOpen={this.state.showModal}
                onRequestClose={this.handleCloseModal}
                style={customStyles}
                contentLabel="Sign In Modal"
                >
                <h3>Sign In Using Google</h3>
                <a className="btn" href="/auth/google">Sign In with Google</a>
                <button onClick={this.handleCloseModal}>Close</button>
            </ReactModal>
            </div>
        )
    }
}

export default Landing;