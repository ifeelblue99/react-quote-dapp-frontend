import React from 'react';
import '../style.css';
import Quote from './Quote';
import { quoteAbi, quoteContractAddress } from '../contract/abi-address.js';
import { ethers } from 'ethers';

export default function QuoteHolder() {
  const [quotes, setQuotes] = React.useState([]);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const quoteSmartContract = new ethers.Contract(
    quoteContractAddress,
    quoteAbi,
    provider
  );
  quoteSmartContract.getAllQuotes().then((dt) => {
    console.log(dt);
  });

  return (
    <div className="quote-holder">
      <Quote />
      {quotes}
    </div>
  );
}
