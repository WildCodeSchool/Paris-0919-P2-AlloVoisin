import React, { Component } from 'react';
import './Coins.css';



export default class Coins extends Component {
    state = {
        coinsShow: 0
    }

    componentDidMount() {
        setInterval(this.coinsShowFunc, 100);
    }



    coinsShowFunc = () => {
        if (this.props.coins < 1000) {
            this.setState({
                coinsShow: this.props.coins
            });
        } else if (this.props.coins < 1000000) {
            this.setState({
                coinsShow: (this.props.coins / 1000).toFixed(2) + 'K'
            });
        } else if (this.props.coins < 1000000000) {
            this.setState({
                coinsShow: (this.props.coins / 1000000).toFixed(2) + 'M'
            });
        } else if (this.props.coins < 1000000000000) {
            this.setState({
                coinsShow: (this.props.coins / 1000000000).toFixed(2) + 'B'
            });
        } else {
            this.setState({
                coinsShow: (this.props.coins / 1000000000000).toFixed(2) + 'T'
            });
        }
    }





    render() {
        return ( 
            <div className='coin-container'>
            <img className = 'coin-img' alt='coin' src='https://image.noelshack.com/fichiers/2019/43/4/1571929544-coins.png' />
            <p className = 'coin-text-counter'> { this.state.coinsShow } </p> 
            </div>
        )
    }
}