import React from 'react';
import Separator from '../common/separator/Separator';
import './body.css';

function About() {
    return (
        <div className="about">
            <Separator />
            <label className="section-title">About Me</label>
            <div className="about-top">
                <div className="about-photo">
                        <img src={require("../../assets/Coding-bro.png").default}
                        className="top-photo" alt="profile"/>
                </div>
                <div className="about-info">
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
                
            </div>
        
        </div>
    )
}

export default About
