import React, { Component } from "react";
import NavBar from "../components/NavBar";
import LandingHero from "../components/LandingHero";
import { LandingInfo, LandingImage } from "../components/LandingBlocks";
import LandingRow from "../components/LandingRow";
import Button from "../components/Button";


class Landing extends Component {
    render () {
        return (
            <>
            <NavBar>
                <Button style={{ display: "inline" }}>
                    Login
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
                <Button style={{ margin: "auto" }}>
                    {/* Add onClick and reformat */}
                    Create Free Account
                </Button>
            </LandingRow>
            </>
        )
    }
}

export default Landing;