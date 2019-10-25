import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "./SocialNetwork.css";

const SocialNetwork = () => {
  return (
    <div className="social-container">
      <a href="http://facebook.com" target="_blank">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="http://instagram.com" target="_blank">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
      <a href="http://youtube.com" target="_blank">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="http://linkedin.com" target="_blank">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
    </div>
  );
};

export default SocialNetwork;
