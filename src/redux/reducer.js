export default function reducer(
  state = {
    walletAddress: 'no wallet',
    connected: false,
  },
  action
) {
  switch (action.type) {
    case 'connect':
      return {
        walletAddress: action.payload.walletAddress,
        connected: action.payload.connected,
      };
    case 'disconnect':
      return {
        walletAddress: action.payload.walletAddress,
        connected: false,
      };
    default:
      return state;
  }
}
