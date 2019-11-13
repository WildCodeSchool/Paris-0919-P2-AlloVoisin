import React from "react";
import "./Store.css";
import ExitCross from "../../common/ExitCross";
import Item from "./Item";

<<<<<<< HEAD
const Store = ({ store, coins, section, handleExitStore, removeCoins, characterIsBought, blackWidow, thor, spiderMan, hulk, msMarvel }) => {
  console.log(store[section]);
=======
const Store = ({ store, coins, section, handleExitStore, handleClick }) => {
>>>>>>> 4fc61909d09087802ec06d841a87176951020f24
  return (
    store && (
      <div className="items-container">
        <h2>Store</h2>
        <ExitCross exitStore={handleExitStore} />
        <ul className="items-list-container">
          {store[section].map(item => {
            return (
              <Item
                coins={coins}
                key={item._id}
                id={item._id}
                type={section}
                name={item.name}
                imgSrc={item.imgSrc}
<<<<<<< HEAD
                price={100}
                removeCoins={removeCoins}
                characterIsBought={characterIsBought}
                blackWidow={blackWidow}
                thor={thor}
                spiderMan={spiderMan}
                hulk={hulk}
                msMarvel={msMarvel}
=======
                isAvailable={item.isAvailable}
                isBought={item.isBought}
                handleClick={handleClick}
>>>>>>> 4fc61909d09087802ec06d841a87176951020f24
              />
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Store;
