import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import Dummy from "../dummyaccount.json";
import { ImageSourceCategory } from "../components/CategoryButtons";
import BannerSmall from "../components/BannerSmall";
import { Desktop, Tablet } from "../utils/mediaqueries";


class SourceCategory extends Component {

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
                            className={
                                window.location.pathname === "/" || window.location.pathname === "/userhome"
                            }
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
                                backgroundImage="./Imgs/SourceCategory/portrait_4x6.jpg"
                                title="Portraits"
                                />
                        </Desktop>
                        <Tablet>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/SourceCategory/portrait_1x1.jpg"
                                title="Portraits"
                                />
                        </Tablet>
                        {/* Single col, but with react-responsive options */}
                        {/* Button 2 */}
                        <Desktop>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/SourceCategory/landscape_4x6.jpg"
                                title="Landscapes"
                                />
                        </Desktop>
                        <Tablet>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/SourceCategory/landscape_1x1.jpg"
                                title="Landscapes"
                                />
                        </Tablet>
                    
                    
                        {/* Single col, but with react-responsive options */}
                        {/* Button 3 */}
                        <Desktop>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/SourceCategory/creative_concept_4x6.jpg"
                                title="Creative Concept"
                                />
                        </Desktop>
                        <Tablet>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/SourceCategory/creative_concept_1x1.jpg"
                                title="Creative Concept"
                                />
                        </Tablet>
                        {/* Single col, but with react-responsive options for image size */}
                        {/* Button 4 */}
                        <Desktop>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/SourceCategory/fashion_4x6.jpg"
                                title="Fashion"
                                />
                        </Desktop>
                        <Tablet>
                            <ImageSourceCategory 
                                backgroundImage="./Imgs/SourceCategory/fashion_1x1.jpg"
                                title="Fashion"
                                />
                        </Tablet>
                    </div>
                </div>
            </div>
        )
    }
}

export default SourceCategory;