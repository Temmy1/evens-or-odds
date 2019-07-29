import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchDeckResult } from '../actions/deck';
import Instructions from './Instructions';


class App extends Component {
  
  startGame = () => {
    this.props.startGame();

    fetch('https://deckofcardsapi.com/api/deck/new/shuffle/')
      .then(response => response.json())
      .then(json => this.props.fetchDeckResult(json))
  }
  
  render () {
    // console.log('this', this);
    return (
        <div className="wrapper">
          <h2>
          ♠️ ♦️ Evens or Odds ♦️ ♣️
          </h2>
          {
            this.props.gameStarted ? (
              <div>
                <h3>Game is on</h3>
                <button onClick={this.props.cancelGame}>Cancel game</button>
              </div>
              
              ) : 
              (
                <div>
                  <h3>Start a new game!</h3>
                  <button onClick={this.startGame}>Start</button> 
                  <hr />
                  <Instructions />
                </div>
              )
          }
         
        </div>
        
    )
  }
}

// привязывает состояния из redux к props приложения
const mapStateToProps = state => {
  // console.log('state:', state);

  return { gameStarted: state.gameStarted };
}
// привязывает action из redux к props приложения
const mapDispatchToProps = dispatch => {
  return { 
    startGame: () => dispatch(startGame()),
    cancelGame: () => dispatch(cancelGame()),
    fetchDeckResult: deckJson => dispatch(fetchDeckResult(deckJson))
  };
}
const componentConnector = connect(mapStateToProps, mapDispatchToProps);

export default componentConnector(App);