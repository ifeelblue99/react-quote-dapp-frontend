import React from 'react';
import { connectToMetamask } from './lib/metamask-connection';
import Header from './components/Header';
import Wallet from './components/Wallet';
import { useSelector } from 'react-redux';
import store from './redux/store';
import PostQuote from './components/PostQuote';
import QuoteHolder from './components/QuoteHolder';
import './style.css';

export default function App() {
  const connected = useSelector((state) => state.connected);
  // on disconnection
  window.ethereum.on('accountsChanged', () => {
    store.dispatch({
      type: 'disconnect',
      payload: {
        walletAddress: 'Disconnected...',
        connected: false,
      },
    });
  });
  async function connect() {
    try {
      const account = await connectToMetamask();
      store.dispatch({
        type: 'connect',
        payload: {
          walletAddress: account[0],
          connected: true,
        },
      });
    } catch (err) {
      store.dispatch({
        type: 'disconnect',
        payload: {
          walletAddress: err.message,
          connected: false,
        },
      });
    }
  }
  return (
    <div>
      <Header />
      <main>
        <Wallet connectToMetamask={() => connect()} />
        <PostQuote />
      </main>
      <QuoteHolder />
    </div>
  );
}
