import { SET_GUESS, SET_GAME_STARTED, DECK_DRAW } from '../actions/types';

const DEFAULT_GAME_STATE = {
  guess: '',
  correctGuess: 0
}

const EVENS = ['2', '4', '6', '8', '0'];
const ODDS = ['ACE', '3', '5', '7', '9'];

const gameStateReducer = (state = DEFAULT_GAME_STATE, action ) => {
  switch(action.type) {
    case SET_GUESS:
      return {...state, guess: action.guess };
    case SET_GAME_STARTED: 
      return DEFAULT_GAME_STATE;
    case DECK_DRAW.FETCH_SUCCESS: 
      const { value } = action.cards[0];
      const { guess, correctGuess } = state;
      
      if(
        (guess === 'even' && EVENS.includes(value)) ||
        (guess === 'odd' && ODDS.includes(value))
        ) {
         return { ...state, correctGuess: correctGuess+1 };
      }
      return state;
    default: 
      return state;
  }
}

export default gameStateReducer;