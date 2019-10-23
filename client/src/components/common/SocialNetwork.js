import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
    faFacebook,
    faInstagram,
    faYoutube,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons"

const SocialNetwork = () =>{
    return (
        <div className="social-container">
           <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x" /></a> 
            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
            <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        </div>
    )
}




export default SocialNetwork;