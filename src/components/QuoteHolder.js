import React from 'react';
import '../style.css';
import Quote from './Quote';
import { quoteAbi, quoteContractAddress } from '../contract/abi-address.js';
import { ethers } from 'ethers';

export default function QuoteHolder() {
  const provider = new ethers.providers.AlchemyProvider('ropsten');
  const quoteSmartContract = new ethers.Contract(
    quoteContractAddress,
    quoteAbi,
    provider
  );
  console.log(quoteS);

  async function getAll() {
    const quotes = await quoteSmartContract.getAllQuotes();
    conosle.log(quotes);
  }
  getAll();
  return (
    <div className="quote-holder">
      <Quote />
    </div>
  );
}
