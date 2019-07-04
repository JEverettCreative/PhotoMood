import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Dummy from "../dummyaccount.json";
import { ImageSourceCategory } from "../components/CategoryButtons";
import BannerSmall from "../components/BannerSmall";
import { Desktop, Tablet } from "../utils/mediaqueries";

class CreateProject extends Component {

    state = {
        Dummy
    }


    render() {
        return (
            <div>
                <NavBar>
                    <Button style={{ display: "inline" }}>
                        <Link style={{ color: "inherit" }}
                            to="/userhome"
                            // className={
                            //     window.location.pathname === "/" || window.location.pathname === "/userhome"
                            // }
                            >
                            <span><i class="fas fa-user fa-lg"></i></span>
                    </Link>
                    </Button>
                </NavBar>
                <div className="container-fluid">
                    <BannerSmall
                        heading="How would you like to start adding photos to your Mood?"
                        />
                    <div className="container-fluid d-flex flex-wrap">
                        {/* Single col, but with react-responsive options */}
                        {/* May need to provide different col styles or sizes to solve responsiveness issues mobile through tablet width */}
                        {/* Button 1 */}
                        <Desktop>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/Landing_InfoRight_1.png"
                                title="Get Inspired"
                                info="Filter through professional photos by category for your mood board."
                                />
                        </Desktop>
                        <Tablet>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/Tablet_Img_Placeholder.png"
                                title="Get Inspired"
                                info="Filter through professional photos by category for your mood board."
                                />
                        </Tablet>
                        {/* Single col, but with react-responsive options */}
                        {/* Button 2 */}
                        <Desktop>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/Landing_InfoRight_1.png"
                                title="Keyword Search"
                                info="Search professional photos for your mood board using specific keywords."
                                />
                        </Desktop>
                        <Tablet>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/Tablet_Img_Placeholder.png"
                                title="Keyword Search"
                                info="Search professional photos for your mood board using specific keywords."
                                />
                        </Tablet>
                        {/* Single col, but with react-responsive options */}
                        {/* Button 3 */}
                        <Desktop>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/Landing_InfoRight_1.png"
                                title="Explore Albums"
                                info="Find work from fellow PhotoMood photographers that you admire, then link them to your mood board."
                                />
                        </Desktop>
                        <Tablet>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/Tablet_Img_Placeholder.png"
                                title="Explore Albums"
                                info="Find work from fellow PhotoMood photographers that you admire, then link them to your mood board."
                                />
                        </Tablet>
                        {/* Single col, but with react-responsive options for image size */}
                        {/* Button 4 */}
                        <Desktop>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/Landing_InfoRight_1.png"
                                title="Upload Media"
                                info="Already have images that inspire your vision? Upload them to your new mood board here."
                                />
                        </Desktop>
                        <Tablet>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/Tablet_Img_Placeholder.png"
                                title="Upload Media"
                                info="Already have images that inspire your vision? Upload them to your new mood board here."
                                />
                        </Tablet>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateProject;