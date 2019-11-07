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
      {(this.props.blackWidowStoreCharacter === false && this.props.name === "Black-widow") ?
      <button className="Store-button" onClick={this.click}>Hire</button>
      :
      <button className="Store-button" >Bought</button>
      }
    </li>
    )
  }
}


