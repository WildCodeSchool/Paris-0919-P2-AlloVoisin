import React, { Component } from "react";
import ReactPlayer from "react-player";
import Game from "../game/Game";
import BtnStart from "./BtnStart";
import SocialNetwork from "../common/SocialNetwork";
import logoMarvelFight from "../../img/logoMarvelFight.png";
import Rules from "../../components/rules/Rules";
import "./Homepage.css";

export default class Homepage extends Component {
  state = {
    playing: true,
    coins: 0,
    health: 100,
    showPopup: false
  };

  showGame = () => {
    this.setState({
      playing: !this.state.playing,
    });
    this.props.chargeGame();
  };

<<<<<<< HEAD
  // componentDidMount() {
  //   axios
  //     .get("http://localhost:5000/store/characters")
  //     .then(data => console.log(data))
  //     .catch(error => console.log(error));
  // }
=======
>>>>>>> 51ec5e96b22a6c7e20c539564d99102e15e57b49

   togglePopup =() =>{  
this.setState({  
     showPopup: !this.state.showPopup  
});  
 };


  render() {
    return (
      <div id="homepage">
        <div id="top-icons">
          <img
            src="https://image.noelshack.com/fichiers/2019/44/2/1572343624-logo.png"
            alt="Logo Iron Company"
            id="ironCompany"
          />
          <img src={logoMarvelFight} alt="Logo Marvel Fight" id="marvelFight" />
          <SocialNetwork />
        </div>
       
        <BtnStart showGame={this.showGame} />

        {this.props.gameStarted ? (
          <Game
            addCoins={this.addCoins}
            removeHealth={this.removeHealth}
          />
        ) : (
          <></>
        )}

        <div>  
  

{this.state.showPopup ?  
<Rules  
          text='Rules of the game'  
         
          closePopup={this.togglePopup.bind(this)}  
/>  
: null  
}  
</div>  
        <p className="HomepageRules" onClick={this.togglePopup}>Rules</p>

        <ReactPlayer
          url="https://www.youtube.com/embed/4vfGifZY85M"
          playing={this.state.playing}
          width="0"
          height="0"
        />
      </div>
    );
  }
}
