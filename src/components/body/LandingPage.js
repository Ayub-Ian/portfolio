import React from 'react';
import './body.css';


function LandingPage() {
    return (
        <div className="landing">
            
            <div className="landing-top">
        
                <div className="landing-info">
                    <span className="landing-intro">Hello, I'm Ayub</span> 
                        <br/>
                        
                        <span className="landing-job-title">Web developer/designer</span>
                        <br />
                        <br/>
                        <span className="landing-about">High level experience in web design
                            and development producing quality work
                    </span>
                    <div className="about-download ">
                        <a download href={require('../../assets/AyubCV.pdf').default}>
                            Download Resume
                            <i className="fi-rr-download"></i>
                        </a>
                    </div>
                </div>
                <div className="landing-photo">
                    <img src={require("../../assets/Coding-bro.png").default}
                    className="top-photo" alt="profile"/>
                </div>
            </div>
            <div className="landing-bottom">
                <div className="scroll-down">
                <a href="#projects">
                    <i class="fi-rr-mouse"></i><span>Scroll down</span>
                    <i class="fi-rr-arrow-small-down"></i>
                </a>
                </div>
                
            
            </div>
        </div>
    )
}

export default LandingPage
