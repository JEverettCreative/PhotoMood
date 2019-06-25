import React, { Component } from "react";
// import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import LandingHero from "../components/LandingHero";
import { LandingInfo, LandingImage } from "../components/LandingBlocks";
import Row from "../components/Row";
import Button from "../components/Button";


class Landing extends Component {
    render () {
        return (
            <>
            <NavBar />
            <LandingHero />
            <Row>
                <LandingImage>
                    <img src="./Imgs/Landing_InfoRight_1.png" alt="redheaded woman on green background" />
                </LandingImage>
                <LandingInfo>
                    <h1>Get Inspired</h1>
                </LandingInfo>
            </Row>
            <Row>
                <LandingInfo>
                    <h1>Create A Mood Board</h1>
                </LandingInfo>
                <LandingImage>
                    <img src="./Imgs/Landing_InfoRight_1.png" alt="redheaded woman on green background" />
                </LandingImage>
            </Row>
            <Row>
                <LandingImage>
                    <img src="./Imgs/Landing_InfoRight_1.png" alt="redheaded woman on green background" />
                </LandingImage>
                <LandingInfo>
                    <h1>Plan Your Photoshoot</h1>
                </LandingInfo>
            </Row>
            <Row>
                <LandingInfo>
                    <h1>Share Your Work</h1>
                </LandingInfo>
                <LandingImage>
                    <img src="./Imgs/Landing_InfoRight_1.png" alt="redheaded woman on green background" />
                </LandingImage>
            </Row>
            <Row style= {{ borderBottom: "none", height: 300 }}>
                <Button style={{ margin: "auto" }}>
                    {/* Add onClick and reformat */}
                    Create Free Account
                </Button>
            </Row>
            </>
        )
    }
}

export default Landing;