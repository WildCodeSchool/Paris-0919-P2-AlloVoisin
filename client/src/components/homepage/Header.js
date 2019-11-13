import React from "react";
import SocialNetwork from "../common/SocialNetwork";
import logoMarvelFight from "../../img/logoMarvelFight.jpg";

const Header = () => {
  return (
    <div id="top-icons">
      <img
        src="https://image.noelshack.com/fichiers/2019/44/2/1572343624-logo.png"
        alt="Logo Iron Company"
        id="ironCompany"
      />
      <img src={logoMarvelFight} alt="Logo Marvel Fight" id="marvelFight" /> 
      <SocialNetwork />
    </div>
  );
};

export default Header;
