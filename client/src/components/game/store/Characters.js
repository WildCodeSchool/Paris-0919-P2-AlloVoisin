import React from "react";
import "./Characters.css";

const Characters = () => {
  return (
    <div className="items-container">
      <h2>Store</h2>
      <ul className="items-list-container">
        <li className="item-container">
          <div className="background-character">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571836551-thor.png"
              alt="thor"
            />
          </div>
          <p>Thor</p>
          <button>Hire</button>
        </li>
        <li className="item-container">
          <div className="background-character">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571836568-spider-man.png"
              alt="spider-man"
            />
          </div>
          <p>Spider Man</p>
          <button>Hire</button>
        </li>
        <li className="item-container">
          <div className="background-character">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571836568-ms-marvel.png"
              alt="ms-marvel"
            />
          </div>
          <p>Ms. Marvel</p>
          <button>Hire</button>
        </li>
        <li className="item-container">
          <div className="background-character">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571836568-hulk.png"
              alt="hulk"
            />
          </div>
          <p>Hulk</p>
          <button>Hire</button>
        </li>
        <li className="item-container">
          <div className="background-character">
            <img
              src="https://image.noelshack.com/fichiers/2019/43/3/1571836568-black-willow.png"
              alt="black-widow"
            />
          </div>
          <p>Black Widow</p>
          <button>Hire</button>
        </li>
      </ul>
    </div>
  );
};

export default Characters;
