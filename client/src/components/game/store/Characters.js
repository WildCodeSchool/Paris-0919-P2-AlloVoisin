import React, {Component} from "react";
import "./Characters.css";

import Item from "./Item";

class Characters extends Component  {

  render() {
  return (
    this.props.characters && (
      <div className="items-container">
        <h2>Store</h2>
        <img
          src="https://image.noelshack.com/fichiers/2019/43/4/1571929738-cross.png"
          alt="cross"
          className="cross"
          onClick={this.props.showStoreCharacters}
        />
        <ul className="items-list-container">
          {this.props.characters.map(character => {
            return (
              <Item
                key={character._id}
                type="character"
                name={character.name}
                imgSrc={character.imgSrc}
                buyCharacter={this.props.buyCharacter}
                
              />
            );
          })}
        </ul>
      </div>
    )
  );
}
};

export default Characters;
