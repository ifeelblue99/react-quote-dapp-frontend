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
  async function connect() {
    if (!connected) {
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
        console.log('error', err.message);
      }
    } else {
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
