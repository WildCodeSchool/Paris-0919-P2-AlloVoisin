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
           <a href="facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x" /></a> 
            <a href="instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
            <a href="youytube.com"><FontAwesomeIcon icon={faYoutube} size="2x" /></a>
            <a href="linkeding.com"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        </div>
    )
}

export default SocialNetwork;