export const playHand = (playerHand, cpuHand) => {
  return {
    type: 'PLAY_HAND',
    playerHand,
    cpuHand
  };
};
