import React from "react";
import './Skills.css'

const Skills = () => {
  return (
    <div className="items-container">
    <h2>Store</h2>
    <img src="https://image.noelshack.com/fichiers/2019/43/4/1571929738-cross.png" alt="cross" onClick={this.props.showStoreSkills}/>
    </div>
  );
};

export default Skills;
