import React from "react";
import Item from "./Item";

const Skins = ({ showStoreSkins, skins }) => {
  return (
    skins && (
      <div className="items-container">
        <h2>Store</h2>
        <img
          src="https://image.noelshack.com/fichiers/2019/43/4/1571929738-cross.png"
          alt="cross"
          className="cross"
          onClick={showStoreSkins}
        />
        <ul className="items-list-container">
          {skins.map(skin => {
            return (
              <Item
                key={skin._id}
                type="skin"
                name={skin.name}
                imgSrc={skin.imgSrc}
              />
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Skins;
