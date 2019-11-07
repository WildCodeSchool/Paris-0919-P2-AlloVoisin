import React, { Component } from 'react'

export default class Item extends Component {
  click = () => {
    console.log(this.props.name)
    this.props.buyCharacter(this.props.name);
  }

  render() {
    return (
      <li className="item-container">
      <div className={`background-${this.props.type}`}>
        <img src={this.props.imgSrc} alt={this.props.name} />
      </div>
      <p>{this.props.name}</p>
      
      <button className="Store-button" onClick={this.click}>Hire</button>
    </li>
    )
  }
}


