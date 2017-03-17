const initialState = {
  playerHand: '',
  cpuHand: '',
  playerScore: '',
  cpuScore: '',
  verdict: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'PLAY_HAND':
      return Object.assign({}, state, {
        playerHand: action.playerHand,
        cpuHand: action.cpuHand
      })
    default:
      return state;
  }
}
