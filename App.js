import React, { Component } from 'react';
import { Dimensions, View, TouchableWithoutFeedback, Text } from 'react-native';

import Game from "./Game.js";
import MainMenu from "./MainMenu.js";
import GameSingletonInstance from "./GameSingleton";
import Canvas from 'react-native-canvas';
import GestureRecognizer, {swipeDirections} from "react-native-swipe-gestures";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      
    };

    this.game;
    this.onTap = this.onTap.bind(this);
  }
 
  handleCanvas = (canvas) => {
    canvas.height = Dimensions.get('window').height;
    canvas.width = Dimensions.get('window').width;
    
    const ctx = canvas.getContext('2d');
    // ctx.fillStyle = '#162802';
    // ctx.fillRect(0,0,canvas.width, canvas.height);

    // set singleton
    GameSingletonInstance.Setup(canvas.width, canvas.height, ctx);

    
    var mainMenu = new MainMenu();
    this.game = new Game();
    this.game.LoadGameState(mainMenu);

    this.game.Cycle()
    //var gameLoopInterval = setInterval(() => {game.Cycle()}, 125);

  }

  onTap()
  {
    console.log("in onTap");
    this.game.HandleTouchInput();
  }
 
  onSwipe(gestureName, gestureState) {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    console.log("onSwipe");
    this.setState({gestureName: gestureName});
    switch (gestureName) {
      case SWIPE_UP:
        console.log("UP");
        break;
      case SWIPE_DOWN:
        console.log("Down");
        break;
      case SWIPE_LEFT:
        console.log("Left");
        break;
      case SWIPE_RIGHT:
        console.log("Right");
        break;
    }

    this.game.HandleSwipeInput(gestureName);
  }
 
  render() {

    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };

    return (
      <GestureRecognizer
          onSwipe={(direction, state) => this.onSwipe(direction, state)}
          config={config}
          style={{
            flex: 1,
            resizeMode: 'cover',
            zIndex: 5
          }}
          >
      <View 
        // onResponderGrant = { () => this.onTap() }
        onResponderRelease = { () => this.onTap() }
        onStartShouldSetResponder = { (e) => {return true} }
        style={{
          flex: 1,
          resizeMode: 'cover',
        }}
      >
        
        
        <Canvas 
          ref={this.handleCanvas}
          style={{
            zIndex: 2
          }}
        ></Canvas>
        
      </View>      
      </GestureRecognizer>
    )
  }
}