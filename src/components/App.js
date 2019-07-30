import React, { Component } from 'react';
import { connect } from 'react-redux';
import { startGame, cancelGame } from '../actions/settings';
import { fetchNewDeck } from '../actions/deck';
import fetchStates from '../reducers/fetchStates';
import Instructions from './Instructions';
import DrawCard from './DrawCard';


class App extends Component {
  
  startGame = () => {
    this.props.startGame();
    this.props.fetchNewDeck();
  }
  
  render () {
    console.log('this', this);

    if(this.props.fetchState === fetchStates.error) {
      return (
        <div>
          <p>Pleade try reloading the App. An error occured</p>
          <p>{this.props.message}</p>
        </div>
      )
    }
    return (
      <div className="wrapper">
        <h2>♠️ ♦️ Evens or Odds ♦️ ♣️</h2>
          {
            this.props.gameStarted ? (
              <div>
                <h3>Game is on</h3>
                <DrawCard />
                <hr />
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
  // const { gameStarted } = state.settings;
  // const { fetchState, message } = state.deck;
  //equals 
  const {
    settings: { gameStarted },
    deck: { fetchState, message }
  } = state;

  return { gameStarted, fetchState, message };
}
// привязывает action из redux к props приложения
// const mapDispatchToProps = dispatch => {
//   return { 
//     startGame: () => dispatch(startGame()),
//     cancelGame: () => dispatch(cancelGame()),
//     fetchNewDeck: () => fetchNewDeck(dispatch)
//   };
// }
const componentConnector = connect(
  mapStateToProps,
  { startGame, cancelGame, fetchNewDeck }
);

export default componentConnector(App);