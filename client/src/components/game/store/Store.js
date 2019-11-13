import React from "react";
import "./Store.css";
import ExitCross from "../../common/ExitCross";
import Item from "./Item";

const Store = ({ store, coins, section, handleExitStore, removeCoins, characterIsBought, blackWidow, thor, spiderMan, hulk, msMarvel }) => {
  console.log(store[section]);
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
                type={section}
                name={item.name}
                imgSrc={item.imgSrc}
                price={100}
                removeCoins={removeCoins}
                characterIsBought={characterIsBought}
                blackWidow={blackWidow}
                thor={thor}
                spiderMan={spiderMan}
                hulk={hulk}
                msMarvel={msMarvel}
              />
            );
          })}
        </ul>
      </div>
    )
  );
};

export default Store;
