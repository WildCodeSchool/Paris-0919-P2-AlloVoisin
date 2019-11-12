import React from "react";

class Item extends React.Component {
  state = {
    isBought: false,
    isAvailable: this.props.coins >= this.props.price
  };

  handleClick = e => {
    const btnVal = e.target.textContent;
    if (btnVal === "Hire" && this.state.isAvailable) {
      this.setState({
        isBought: true
      });
    }
  };

  render() {
    return (
      <li className="item-container">
        <div className={`background-${this.props.type}`}>
          <img src={this.props.imgSrc} alt={this.props.name} />
        </div>
        <p>{this.props.name}</p>
        <button className="Store-button" onClick={this.handleClick}>
          {this.state.isBought ? "Bought" : "Hire"}
        </button>
      </li>
    );
  }
}

export default Item;
