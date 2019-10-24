
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

import React from 'react'
import Store from './store/Store';
import StoreBar from './StoreBar';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Characters from './store/Characters';
import Skins from './store/Skins';
import Skills from './store/Skills';



const Game = () => {
  return (

    <div>
    <Router>
      <Route path='/store/characters' component={Characters}/>
      <Route path='/store/skins' component={Skins}/>
      <Route path='/store/skills' component={Skills}/>
      <StoreBar />
    </Router>      
    </div>

  )
}

export default Game;

