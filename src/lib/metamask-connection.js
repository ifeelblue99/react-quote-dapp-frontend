import store from '../redux/store';

export async function connectToMetamask() {
  try {
    let account = await ethereum.request({ method: 'eth_requestAccounts' });
    return account;
  } catch (err) {
    store.dispatch({
      type: 'disconnect',
      payload: {
        walletAddress: `ERR:${err.message}`,
        connected: false,
      },
    });
  }
}
