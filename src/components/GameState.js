import React from 'react';
import { connect } from 'react-redux';

const correctGuessesRecordKey = 'CORRECT_GUESSES_RECORD_foo456';

const checkRecord = correctGuess => {
  const record = Number(localStorage.getItem(correctGuessesRecordKey));

  if(correctGuess > record) {
    localStorage.setItem(correctGuessesRecordKey, correctGuess)

    return { record: correctGuess, isNewRecord: true }
  }

  return { record, isNewRecord: false }
}
const GameState = ({ remaining, correctGuess }) => {
  const guessText = correctGuess === 1 ? 'guess' : 'guesses';

  const { record, isNewRecord } = checkRecord(correctGuess);

  const recordLabel = isNewRecord ? '🎉 New record' : 'Record';

  return (
    <div>
      <h3>{recordLabel}: { record } </h3>
      <p>{remaining} cards</p>
      <p>{correctGuess} correct {guessText}</p>
    </div>
  );
}
export default connect(
  ({
    deck: { remaining },
    gameState: { correctGuess }
  }) => ({ remaining, correctGuess })
)(GameState);