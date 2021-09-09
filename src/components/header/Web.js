import React from 'react';
import './header.css';

function Web() {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#projects">
                <i className="fi-rr-rocket option-icon"></i>Projects</a>
            </div>
            <div className="web-option">
                <a href="#skills">
                <i className="fi-rr-stats option-icon"></i>Skills</a>
            </div>
            <div className="web-option">
                <a href="#work">
                <i className="fi-rr-network option-icon"></i>Work</a>
            </div>
            <div className="web-option">
                <a href="#contact">
                <i className="fi-rr-user option-icon"></i>Contact</a>
            </div>
        </div>
    )
}

export default Web
