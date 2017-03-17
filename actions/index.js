export const startMatch = (playerHand) => {
  console.log('dispatching START_MATCH: ', playerHand)
  return {
    type: 'START_MATCH',
    playerHand
  };
};
