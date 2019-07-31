import React from 'react';
import { connect } from 'react-redux';
import { guessOdd, guessEven } from '../actions/guess';

const Guess = props => {
  console.log("ood", props);
  const { guess, guessOdd, guessEven } = props;
  return (
    <div>
      <h3>Will it be Even or Odd?</h3>
      <div>
        <button
          onClick={guessOdd}
          style={
            guess === 'odd' ?
            { border: '2px solid #43a047' }
            : null
          }
        >Odd</button>
        {' '}
        <button
          onClick={guessEven}
          style={
            guess === 'even' ?
            { border: '2px solid #43a047' }
            : null
          }
        >Even</button>
      </div>
      
    </div>
  )
}

export default connect(
  ({ gameState: { guess } }) => ({ guess }),
  { guessOdd, guessEven }
  )(Guess);