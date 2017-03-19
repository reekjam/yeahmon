import { START_MATCH } from '../constants';

export const startMatch = (playerHand) => {
  return {
    type: START_MATCH,
    playerHand
  };
};
