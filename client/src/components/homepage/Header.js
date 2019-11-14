import React from "react";
import SocialNetwork from "../common/SocialNetwork";
import logoMarvelFight from "../../img/logoMarvelFight.jpg";
import NavBar from "../common/NavBar";
import "./Header.css";

const Header = () => {
  return (
    <div id="top-icons">
      <NavBar id="navbar-position" />
      <img src={logoMarvelFight} alt="Logo Marvel Fight" id="marvelFight" />
      <SocialNetwork />
    </div>
  );
};

export default Header;
