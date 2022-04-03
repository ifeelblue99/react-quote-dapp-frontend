import React from 'react';
import '../style.css';
import { useSelector } from 'react-redux';

export default function Wallet(props) {
  const { walletAddress, connected } = useSelector((state) => state);
  return (
    <div className="wallet">
      <h3>
        Wallet: <span>{walletAddress}</span>
      </h3>
      <button onClick={props.connectToMetamask}>
        {connected ? 'Disconnect' : 'Connect'}
      </button>
    </div>
  );
}
