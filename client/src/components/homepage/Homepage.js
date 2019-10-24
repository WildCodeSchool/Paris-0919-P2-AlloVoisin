import React, { Component } from 'react'
import Game from '../game/Game'
import BtnStart from './BtnStart'
import SocialNetwork from '../common/SocialNetwork'
import logoIronCompany from '../../img/logoIronCompany.jpg'
import logoMarvelFight from '../../img/logoMarvelFight.png'
import './Homepage.css'

export default class Homepage extends Component {
    state = {
        gameStarted: false
    }

    showGame = () => {
        this.setState({
            gameStarted: !this.state.gameStarted
        });
    }

    render() {
        return (
            <div id="homepage">
                <div id="top-icons">
                    <img src={logoIronCompany} alt="Logo Iron Company" id="ironCompany"/>
                    <SocialNetwork />
                </div>
                <img src={logoMarvelFight} alt="Logo Marvel Fight" id="marvelFight"/>
                <BtnStart showGame={this.showGame}/>
                {
                   this.state.gameStarted ? <Game /> : <></>
                }
                <p>Rules</p>
            </div>


        )
    }
}
