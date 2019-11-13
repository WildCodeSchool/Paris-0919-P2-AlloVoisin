import React from "react";
import "./Inventory.css";

import ExitCross from "../../common/ExitCross";

const Inventory = ({ showStoreCharacters }) => {
  return (
    <div className="items-container">
      <h2>Store</h2>
      <ExitCross exitCross={showStoreCharacters} />
    </div>
  );
};

export default Inventory;
