import { DECK, DECK_DRAW } from './types';

const API_ADDRESS = 'https://deckofcardsapi.com/api';
// works with official api no need to herocuapp and other

//action creators
export const fetchDeckSuccess = deckJson => {
  const { remaining, deck_id } = deckJson;

  return { type: DECK.FETCH_SUCCESS, remaining, deck_id };
}
export const fetchDeckError = error => {
  return { type: DECK.FETCH_ERROR, message: error.message};
}
//action creators
export const fetchNewDeck = () => dispatch => {
  return fetch(`${API_ADDRESS}/deck/new/shuffle/`)
    .then(response => {
      if(response.status !== 200) {
        throw new Error('Unsuccessful request to the server')
      }
      return response.json()
    })
    .then(json => dispatch(fetchDeckSuccess(json)))
    .catch(error => dispatch(fetchDeckError(error)));
}

export const fetchDrawCard = deck_id => dispatch => {
  return fetch(`${API_ADDRESS}/deck/${deck_id}/draw/`)
  .then(response => {

    if(response.status !== 200) {
      throw new Error('Unsuccessful request to the server')
    }

    return response.json();
  })
  .then(json => {
      dispatch({
        type: DECK_DRAW.FETCH_SUCCESS,
        cards: json.cards,
        remaining: json.remaining
    });
  })
  .catch(error => dispatch({
    type: DECK_DRAW.FETCH_ERROR,
    message: error.message
  }));
}