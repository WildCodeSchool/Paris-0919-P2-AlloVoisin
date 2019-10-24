import React from 'react';
import SocialNetwork from "./components/common/SocialNetwork";
import './App.css';
import Game from './components/game/Game';
import './components/common/SocialNetwork.css';

function App() {
  return (
    <div className="App">

      <Game />
    <SocialNetwork />
    </div>
  );
}

export default App;
