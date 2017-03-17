import { HANDS } from '../constants';

const randomHand = () => {
  return HANDS[Math.floor(Math.random() * HANDS.length)]
}

const determineOutcome = (store, playerHand, cpuHand) => {
  if (playerHand === cpuHand) {
    store.dispatch({
      type: 'TIE_GAME',
      verdict: 'tie game'
    })
  }

  const playerIndex = HANDS.indexOf(playerHand);
  const cpuIndex = HANDS.indexOf(cpuHand);

  if (HANDS[(playerIndex + 1) % HANDS.length] == cpuHand) {
    store.dispatch({
      type: 'CPU_WIN',
      verdict: 'you lose'
    })
  }

  if (HANDS[(playerIndex + 2) % HANDS.length] == cpuHand) {
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
