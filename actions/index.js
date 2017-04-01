import {
  handOptions,
  START_MATCH,
  END_MATCH,
  PLAYER_WIN,
  PLAYER_LOSE,
  TIE_GAME,
} from '../constants';

const randomHand = () => {
  return handOptions[Math.floor(Math.random() * handOptions.length)]
}

export const startMatch = (playerHand) => {
  return dispatch => {
    const cpuHand = randomHand();

    if (playerHand === cpuHand) {
      dispatch(tieGame(playerHand))
    };

    const playerIndex = handOptions.indexOf(playerHand);

    if (handOptions[(playerIndex + 1) % handOptions.length] == cpuHand) {
      dispatch(playerLose(playerHand))
    };

    if (handOptions[(playerIndex + 2) % handOptions.length] == cpuHand) {
      dispatch(playerWin(playerHand))
    };

    dispatch(endMatch(playerHand, cpuHand));
  };
};

const tieGame = () => {
  return {
    type: TIE_GAME,
    results: {
      verdict: 'Tie game'
    }
  }
}

const playerWin = () => {
  return {
    type: PLAYER_WIN,
    results: {
      verdict: 'You win'
    }
  }
}

const playerLose = (store) => {
  return {
    type: PLAYER_LOSE,
    results: {
      verdict: 'You lose'
    }
  }
}

const endMatch = (playerHand, cpuHand) => {
  return {
    type: END_MATCH,
    playerHand: playerHand,
    cpuHand: cpuHand
  }
}
