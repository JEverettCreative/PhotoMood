import React from "react";
// import { Link } from "react-router-dom";
import LandingHero from "../components/LandingHero";
// import landingImgs from "../../src/landingInfoImgs.json";
import { LandingInfo, LandingImage } from "../components/LandingBlocks";
import Row from "../components/Row";


function Landing() {
    return (
        <>
        <LandingHero />
        <Row>
            <LandingImage>
                <img src="./Imgs/Landing_InfoRight_1.png" alt="redheaded woman on green background" />
            </LandingImage>
            <LandingInfo>
                <h1>Testing</h1>
            </LandingInfo>
        </Row>
        <Row>
            <LandingInfo>
                <h1>Testing</h1>
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
                <h1>Testing</h1>
            </LandingInfo>
        </Row>
        <Row>
            <LandingInfo>
                <h1>Testing</h1>
            </LandingInfo>
            <LandingImage>
                <img src="./Imgs/Landing_InfoRight_1.png" alt="redheaded woman on green background" />
            </LandingImage>
        </Row>
        </>
    )
}

export default Landing;