import React from "react";
import Characters from './Characters';

<<<<<<< HEAD
class Item extends React.Component {
   state = {
    isBought: false,
  //   isAvailable: this.props.coins >= this.props.price
  };

  componentDidMount = () => {
    if (this.props.name === 'Black-widow') {
      this.setState({
        isBought: this.props.blackWidow
      })
    }
    if (this.props.name === 'Thor') {
      this.setState({
        isBought: this.props.thor
      })
    }
    if (this.props.name === 'Spider-man') {
      this.setState({
        isBought: this.props.spiderMan
      })
    }
    if (this.props.name === 'Hulk') {
      this.setState({
        isBought: this.props.hulk
      })
    }
    if (this.props.name === 'Ms Marvel') {
      this.setState({
        isBought: this.props.msMarvel
      })
    }
  }

  handleClick = e => {
    const btnVal = e.target.textContent;
    if (btnVal === "Hire" && (this.props.coins > this.props.price)) {
      this.setState({
        isBought: true
      });
      this.props.characterIsBought(this.props.name)
      this.props.removeCoins(this.props.price)
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
=======
const Item = ({
  id,
  name,
  type,
  imgSrc,
  isBought,
  isAvailable,
  handleClick
}) => {
  const handleClickBtn = () => {
    handleClick(id);
  };

  return (
    <li className="item-container">
      <div className={`background-${type}`}>
        <img src={imgSrc} alt={name} />
      </div>
      <p>{name}</p>
      <button className="Store-button" onClick={handleClickBtn}>
        {isBought ? "Bought" : "Hire"}
      </button>
    </li>
  );
};
>>>>>>> 4fc61909d09087802ec06d841a87176951020f24

export default Item;
