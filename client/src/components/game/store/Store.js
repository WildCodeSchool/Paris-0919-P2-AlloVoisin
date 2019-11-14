import React from "react";
import "./Store.css";
import ExitCross from "../../common/ExitCross";
import Item from "./Item";

const Store = ({ store, coins, section, handleExitStore, handleClick }) => {
  return (
    store && (
      <div className="items-container">
        <h2>{section}</h2>
        <ExitCross exitStore={handleExitStore} />
        <ul className="items-list-container">
          {store[section] &&
            store[section].map(item => {
              return (
                <Item
                  coins={coins}
                  key={item._id}
                  id={item._id}
                  type={section}
                  name={item.name}
                  imgSrc={item.imgSrc}
                  isAvailable={item.isAvailable}
                  isBought={item.isBought}
                  isUsed={item.isUsed}
                  handleClick={handleClick}
                />
              );
            })}
        </ul>
      </div>
    )
  );
};

export default Store;
