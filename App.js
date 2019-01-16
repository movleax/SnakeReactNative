import React, { Component } from 'react';
import Canvas from 'react-native-canvas';
import { Dimensions } from 'react-native';
import Game from "./Game.js";
import MainMenu from "./MainMenu.js";
import GameSingletonInstance from "./GameSingleton";

export default class App extends Component {

  constructor()
  {
    super();
  }
 
  handleCanvas = (canvas) => {
    canvas.height = Dimensions.get('window').height;
    canvas.width = Dimensions.get('window').width;
    
    const ctx = canvas.getContext('2d');
    // ctx.fillStyle = '#162802';
    // ctx.fillRect(0,0,canvas.width, canvas.height);

    
    GameSingletonInstance.Setup(canvas.width, canvas.height, ctx);

    var game = new Game();
    var mainMenu = new MainMenu();
    game.LoadGameState(mainMenu);

    // set singleton
    

    game.Cycle()
    //var gameLoopInterval = setInterval(() => {game.Cycle()}, 125);

  }
 
  render() {
    return (
      <Canvas ref={this.handleCanvas}/>
    )
  }
}