import React from 'react';
import './StoreBar.css';


const StoreBar = () => {
    return (

        <div className="store-bar-container">
          <ul className="img-container">
              <li className="img-weapons"></li>
              <li className="img-skins"><img src="#" alt="skin"/></li>
              <li className="img-characters"><img src="#" alt="character"/></li>
              <li className="img-skills"><img src="#" alt="skill"/></li>
          </ul>
          <img src="./marvel.png" alt="weapon"/>
       </div>
    )
}








export default StoreBar;