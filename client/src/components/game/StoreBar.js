import React from 'react';
import './StoreBar.css';


const StoreBar = () => {
    return (

        <div className="store-bar-container">
          <ul className="img-container">
              <li className="img-weapons"><img src="https://image.noelshack.com/fichiers/2019/43/3/1571823611-weapons.png" alt="weapon"/></li>
              <li className="img-skins"><img src="https://image.noelshack.com/fichiers/2019/43/3/1571823600-skins.png" alt="skin"/></li>
              <li className="img-characters"><img src="https://image.noelshack.com/fichiers/2019/43/3/1571823595-characters.png" alt="character"/></li>
              <li className="img-skills"><img src="https://image.noelshack.com/fichiers/2019/43/3/1571823603-skills.png" alt="skill"/></li>
          </ul>
       </div>
    )
}








export default StoreBar;