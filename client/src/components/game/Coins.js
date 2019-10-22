import React, { Component } from 'react';
import './Coins.css';



export default class Coins extends Component {
state = {
    coins : 0
}

componentDidMount(){
setInterval(this.addCoins, 2000);}
    
addCoins = () => {
    this.setState({
        coins : this.state.coins + 10
    });
}

    render() {
        return (
            <div className='coin-container'>
                <img className='coin-img' alt='coin' src='https://icon-library.net/images/coins-icon/coins-icon-22.jpg'/>
                <p className='coin-counter'>{this.state.coins}</p>
            </div>
        )
    }
}
