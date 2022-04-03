import React from 'react';
import '../style.css';
import { useSelector } from 'react-redux';

export default function Wallet(props) {
  const { walletAddress, connected } = useSelector((state) => state);
  return (
    <div className="wallet">
      <h4>
        Wallet: <i>{walletAddress}</i>
      </h4>
      <button onClick={props.connectToMetamask}>
        {connected ? 'You are connected' : 'Connect'}
      </button>
    </div>
  );
}
