import React from "react";
import "./Characters.css";

import Item from "./Item";
import ExitCross from "../../common/ExitCross";

const Characters = ({ showStoreCharacters, characters }) => {
  return (
    characters && (
      <div className="items-container">
        <h2>Store</h2>
        <ExitCross exitCross={showStoreCharacters} />
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
