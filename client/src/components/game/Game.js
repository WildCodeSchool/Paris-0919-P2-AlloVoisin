import React, { Component } from 'react'
import Hero from './Hero'
import Villain from './Villain'
import './Game.css'

export default class Game extends Component {
   

    render() {
        return (
            <div id="game">
                <div id="backgroundCover">
                    <Hero />
                    <Villain /> 
               </div>
            </div>
        )
    }
}
