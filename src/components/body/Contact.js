import React from 'react'
import Separator from '../common/separator/Separator';
import './body.css';
import Socials from '../common/socials/Socials';
function Contact() {
    return (
        <div className="contact">
            <Separator />
            <label className="section-title">Contact</label>
            <div className="contact-container">
            
                <div className="contact-info">
                        <ul>
                            <li>
                            <i class="fi-rr-smartphone"></i>
                            <span>Contact me:</span>
                            <span>0727-898-638</span>
                            </li>
                            <li>
                            <i class="fi-rr-envelope"></i>
                            <span>Email:</span>
                            <span>iayub.mia@gmail.com</span>
                            </li>
                            <li>
                            <i class="fi-rr-marker"></i>
                            <span>Location:</span>
                            <span>Nairobi, Kenya</span></li>
                        </ul>
                </div>
                
                
            
            </div>
        </div>
    )
}

export default Contact
