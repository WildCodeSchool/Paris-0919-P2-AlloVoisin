import React from "react";
import "./Characters.css";

import Item from "./Item";

const Characters = ({ showStoreCharacters, characters }) => {
  return (
    characters && (
      <div className="items-container">
        <h2>Store</h2>
        <img
          src="https://image.noelshack.com/fichiers/2019/43/4/1571929738-cross.png"
          alt="cross"
          class="cross"
          onClick={showStoreCharacters}
        />
        <ul className="items-list-container">
          {characters.map(character => {
            return (
              <Item
                key={character._id}
                type="character"
                name={character.name}
                imgSrc={character.imgSrc}
              />
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Characters;
