import React from 'react';
import '../../body/body.css';
import { SocialData } from '../../data/socials'

function Socials() {
    const data = SocialData;
    return (
        <div className="socials">
            {data.map((item) => {
                return (
                    <a href={item.link} className="social-links">
                        <div className="social-icon">
                            <img src={item.icon} alt=""social/>
                        </div>
                        <p>{item.platform}</p>
                    </a>
                    
                )
            })}
        </div>
    )
}

export default Socials
