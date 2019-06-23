import React from "react";
import "./style.css";



function LandingHero() {
    return (
        <div>
            <div className="bd-example">
            <div id="landingCarousel" className="carousel slide container" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#landingCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#landingCarousel" data-slide-to="1"></li>
                    <li data-target="#landingCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="./Imgs/raoul-croes-1093739-unsplash1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Get Inspired</h5>
                            <p>Find professional photos that inspire your next photoshoot.</p>
                        </div>
                    </div>
                <div className="carousel-item">
                    <img src="./Imgs/olivia-hutcherson-1331720-unsplash1.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Visualize and Plan</h5>
                        <p>Create a flexible mood board, set prop and equipment lists, and more.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="./Imgs/jed-dela-cruz-505819-unsplash1.jpg" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Share Your Work</h5>
                        <p>Create a free gallery to showcase your hardwork, and add links to your social media or portfolio.</p>
                    </div>
                </div>
                </div>
                <a className="carousel-control-prev" href="#landingCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#landingCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
                </a>
            </div>
            </div>
        </div>
    )
}

export default LandingHero;