import React from 'react';
import './body.css';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import LandingPage from './LandingPage';

function Body() {
    return (
        <div className="body">
            <section id="landing">
                <LandingPage />
            </section>
            
            <section id="projects">
                <Projects />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="contact">
                <Contact  />
            </section>
        </div>
    )
}

export default Body
