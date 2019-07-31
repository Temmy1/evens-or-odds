import { SET_GUESS } from './types';

export const guessOdd = () => {
  return { type: SET_GUESS, guess: 'odd' };
}
export const guessEven = () => {
  return { type: SET_GUESS, guess: 'even' };
}