import {
  handOptions,
  START_MATCH,
  END_MATCH,
  PLAYER_WIN,
  PLAYER_LOSE,
  TIE_GAME,
  DESCRIBE_PLAYER_WIN,
  DESCRIBE_PLAYER_LOSE,
  DESCRIBE_TIE_GAME
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
      verdict: 'tie game',
      descriptor: DESCRIBE_TIE_GAME
    }
  }
}

const playerWin = () => {
  return {
    type: PLAYER_WIN,
    results: {
      verdict: 'you win',
      descriptor: DESCRIBE_PLAYER_WIN
    }
  }
}

const playerLose = (store) => {
  return {
    type: PLAYER_LOSE,
    results: {
      verdict: 'you lose',
      descriptor: DESCRIBE_PLAYER_LOSE
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
