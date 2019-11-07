import React from "react";
import "./Characters.css";

import Item from "./Item";

const Characters = ({ coins, showStoreCharacters, characters }) => {
  return (
    characters && (
      <div className="items-container">
        <h2>Store</h2>
        <img
          src="https://image.noelshack.com/fichiers/2019/43/4/1571929738-cross.png"
          alt="cross"
          className="cross"
          onClick={showStoreCharacters}
        />
        <ul className="items-list-container">
          {characters.map(character => {
            return (
              <Item
                coins={coins}
                key={character._id}
                type="character"
                name={character.name}
                imgSrc={character.imgSrc}
                price={100}
              />
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Characters;
