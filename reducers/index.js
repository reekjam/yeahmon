const initialState = {
  playerHand: '',
  cpuHand: '',
  playerScore: 0,
  cpuScore: 0,
  verdict: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PLAYER_WIN':
      return Object.assign({}, state, {
        playerScore: state.playerScore += 1,
        verdict: action.verdict
      });
      break;
    case 'CPU_WIN':
      return Object.assign({}, state, {
        cpuScore: state.cpuScore += 1,
        verdict: action.verdict
      });
      break;
    case 'TIE_GAME':
      return Object.assign({}, state, {
        verdict: action.verdict
      });
      break;
    case 'END_MATCH':
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
