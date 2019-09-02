import React, { Component } from 'react';

import Cyrcles from './components/Views/Cyrcles.js';
import Score from './components/Views/Score.js';
import Gameover from './Gameover/Gameover.js';

//import Notification from './components/Notification.js';
import './App.css';



function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

/*function randomNumber = (min, max) => {
    return (Math.floor(Math.random() * (max - min) ) + min);
};  doesnt work outside CLASS*/
class App extends Component {

state = {
    current: 0,
    score: 0,
    showGameover: false,
    round: 0
};
pace = 1500;
timer = undefined;

  exapmleCopy = () => {
    console.log("do not copy heh jk");
  };


  clickHandler = (btnId) => {
    console.log("Clicked: ", btnId);
    if (btnId !== this.state.current) {
      this.gameOverHandler();

      return;
    }
    this.setState({
      round: 0
    });



      this.setState(prevState => {
        return {
          score: prevState.score +1

        };
      });


  };

  gameOverHandler = () => {
    clearTimeout(this.timer);
    this.setState({
      showGameover: true
    });

  };





pickNext = () => {
  let next = undefined;

  this.setState(prevState => {
    return {
      round: prevState.round +1
    };
  });
/*console.log(this.state.round);*/


if (this.state.round >= 5) {
  this.gameOverHandler();
  return;
}

  do {
    next = randomNumber(1, 4);


  } while (next === this.state.current);

  this.setState ({
    current: next
  });

  this.pace *= 0.95;
  this.timer = setTimeout(this.pickNext.bind(this), this.pace);


};

startGame = () => {
  this.pickNext();
};




  render() {
    return (
      <div className="app">

        <h1 onCopy={this.exapmleCopy}>SPEED GAME</h1>
        <p className="Papp">Click Start Game and catch the colors</p>
        <Score score={ this.state.score }/>
        <div>
          <Cyrcles active ={this.state.current === 1} click={() => this.clickHandler(1)} />
          <Cyrcles active ={this.state.current === 2} click={() => this.clickHandler(2)} />
          <Cyrcles active ={this.state.current === 3} click={() => this.clickHandler(3)} />
          <Cyrcles active ={this.state.current === 4} click={() => this.clickHandler(4)} />
        </div>
        <div>
          <button onClick={this.startGame}>Start Game</button>
          <button onClick={this.gameOverHandler}>Stop Game</button>
        </div>
        {this.state.showGameover && <Gameover wasup={ this.state.score }/>}
      </div>
    );
  }
}

export default App;
