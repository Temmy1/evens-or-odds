import React from 'react';
import { connect } from 'react-redux';
import { fetchNewDeck } from '../actions/deck';

const DrawCard = props => {
  console.log('drawcard', props);

 
  return (
    <div>
      <button onClick={this.props.fetchNewDeck()}>Draw the next card</button>
    </div>
  )
}
export default connect( state => ({
  deck_id: state.deck.deck_id
}),
{ fetchNewDeck })(DrawCard);