import { DECK } from '../actions/types';
import fetchStates from './fetchStates'

const DEFAULT_DECK = {
  remaining: 0, 
  deck_id: '',
  fetchState: '',
  message: ''
};


// reducer
const deckReducer = (state = DEFAULT_DECK, action) => {
  switch (action.type) {
    case DECK.FETCH_SUCCESS:
      const { remaining, deck_id } = action;
      return { ...state, remaining, deck_id, fetchState: fetchStates.success };
    case DECK.FETCH_ERROR:
      return { ...state, message: action.message, fetchState: fetchStates.error};
    default:
      return state;
  }
}
export default deckReducer;