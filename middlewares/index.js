import { handOptions } from '../constants';

const randomHand = () => {
  return handOptions[Math.floor(Math.random() * handOptions.length)]
}

const determineOutcome = (store, playerHand, cpuHand) => {
  if (playerHand === cpuHand) {
    store.dispatch({
      type: 'TIE_GAME',
      verdict: 'tie game'
    })
  }

  const playerIndex = handOptions.indexOf(playerHand);
  const cpuIndex = handOptions.indexOf(cpuHand);

  if (handOptions[(playerIndex + 1) % handOptions.length] == cpuHand) {
    store.dispatch({
      type: 'CPU_WIN',
      verdict: 'you lose'
    })
  }

  if (handOptions[(playerIndex + 2) % handOptions.length] == cpuHand) {
    store.dispatch({
      type: 'PLAYER_WIN',
      verdict: 'you win'
    })
  }
}

export default () => {
  return store => next => action => {
    switch (action.type) {
      case 'START_MATCH':
        const playerHand = action.playerHand;
        const cpuHand = randomHand();
        determineOutcome(store, playerHand, cpuHand);

        store.dispatch({
          type: 'END_MATCH',
          playerHand,
          cpuHand
        });
        break;
    }
    return next(action);
  }
}
