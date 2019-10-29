import React, {Component} from "react";
import "./Skills.css";

class Skills extends Component {
  render() {
    return (
      <div className="items-container">
        <h2>Store</h2>
        <img
          src="https://image.noelshack.com/fichiers/2019/43/4/1571929738-cross.png"
          alt="cross"
          class="cross"
          onClick={this.props.showStoreSkills}
        />
      </div>
    );
  }
}

export default Skills;
