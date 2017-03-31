import {
  PLAYER_WIN,
  PLAYER_LOSE,
  TIE_GAME,
  END_MATCH
} from '../constants';

const initialState = {
  playerHand: '',
  cpuHand: '',
  playerScore: 0,
  cpuScore: 0,
  results: {
    verdict: '',
    descriptor: ''
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case PLAYER_WIN:
      return Object.assign({}, state, {
        playerScore: state.playerScore += 1,
        results: {
          verdict: action.results.verdict,
          descriptor: action.results.descriptor
        }
      });
      break;
    case PLAYER_LOSE:
      return Object.assign({}, state, {
        cpuScore: state.cpuScore += 1,
        results: {
          verdict: action.results.verdict,
          descriptor: action.results.descriptor
        }
      });
      break;
    case TIE_GAME:
      return Object.assign({}, state, {
        results: {
          verdict: action.results.verdict,
          descriptor: action.results.descriptor
        }
      });
      break;
    case END_MATCH:
      const {
        playerHand,
        cpuHand
      } = action;
      return Object.assign({}, state, {
        playerHand,
        cpuHand
      })
    default:
      return state;
  }
}
