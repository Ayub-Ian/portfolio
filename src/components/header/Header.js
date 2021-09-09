import React, { useState } from 'react';
import './header.css';
import Web from './Web';
import Mobile from './Mobile';

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="sticky">
            <div className="header">
                <div className="logo">
                    <span><a href="landing">Ayub</a></span>
                </div>
                <div className="menu">
                    <div className="web-menu">
                        < Web />
                    </div>
                    <div className="mobile-menu">
                        <div onClick = {() => setIsOpen(!isOpen)} >
                            <i className="fi-rr-apps menu-icon"></i>
                        </div>
                        {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default Header
