import {
  handOptions,
  PLAYER_WIN,
  PLAYER_LOSE,
  TIE_GAME,
  START_MATCH,
  END_MATCH,
  DESCRIBE_PLAYER_WIN,
  DESCRIBE_PLAYER_LOSE,
  DESCRIBE_TIE_GAME,
 } from '../constants';

const randomHand = () => {
  return handOptions[Math.floor(Math.random() * handOptions.length)]
}

const determineOutcome = (store, playerHand, cpuHand) => {
  if (playerHand === cpuHand) {
    store.dispatch({
      type: TIE_GAME,
      results: {
        verdict: 'tie game',
        descriptor: DESCRIBE_TIE_GAME
      }
    })
  }

  const playerIndex = handOptions.indexOf(playerHand);
  const cpuIndex = handOptions.indexOf(cpuHand);

  if (handOptions[(playerIndex + 1) % handOptions.length] == cpuHand) {
    store.dispatch({
      type: PLAYER_LOSE,
      results: {
        verdict: 'you lose',
        descriptor: DESCRIBE_PLAYER_LOSE
      }
    })
  }

  if (handOptions[(playerIndex + 2) % handOptions.length] == cpuHand) {
    store.dispatch({
      type: PLAYER_WIN,
      results: {
        verdict: 'you win',
        descriptor: DESCRIBE_PLAYER_WIN
      }
    })
  }
}

export default () => {
  return store => next => action => {
    switch (action.type) {
      case START_MATCH:
        const playerHand = action.playerHand;
        const cpuHand = randomHand();
        determineOutcome(store, playerHand, cpuHand);

        store.dispatch({
          type: END_MATCH,
          playerHand,
          cpuHand
        });
        break;
    }
    return next(action);
  }
}
