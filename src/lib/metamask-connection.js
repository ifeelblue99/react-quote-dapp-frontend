import store from '../redux/store';

export async function connectToMetamask() {
  try {
    let account = await ethereum.request({ method: 'eth_requestAccounts' });
    return account;
  } catch (err) {
    console.log('mm', err.message);
    store.dispatch({
      type: 'disconnect',
      payload: {
        walletAddress: `ERR:${err.message}`,
        connected: false,
      },
    });
  }
}
