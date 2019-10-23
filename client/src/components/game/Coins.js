import React, { Component } from 'react';
import './Coins.css';



export default class Coins extends Component {
    state = {
        coins: 0,
        coinsShow: 0
    }

    componentDidMount() {
        setInterval(this.addCoins, 2000);
        setInterval(this.coinsShowFunc, 2000);
    }


    addCoins = () => {
        this.setState({
            coins: this.state.coins + 8500
        });
    }



    coinsShowFunc = () => {
        if (this.state.coins < 1000) {
            this.setState({
                coinsShow: this.state.coins
            });
        } else if (this.state.coins < 1000000) {
            this.setState({
                coinsShow: (this.state.coins / 1000).toFixed(2) + 'K'
            });
        } else if (this.state.coins < 1000000000) {
            this.setState({
                coinsShow: (this.state.coins / 1000000).toFixed(2) + 'M'
            });
        } else if (this.state.coins < 1000000000000) {
            this.setState({
                coinsShow: (this.state.coins / 1000000000).toFixed(2) + 'B'
            });
        } else {
            this.setState({
                coinsShow: (this.state.coins / 1000000000000).toFixed(2) + 'T'
            });
        }
    }





    render() {
        return ( 
            <div className='coin-container'>
            <img className = 'coin-img' alt='coin' src='https://icon-library.net/images/coins-icon/coins-icon-22.jpg' />
            <p className = 'coin-text-counter'> { this.state.coinsShow } </p> 
            </div>
        )
    }
}