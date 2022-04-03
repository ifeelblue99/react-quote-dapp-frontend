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
  const data = [];
  React.useEffect(() => {
    quoteSmartContract.getAllQuotes().then((dt) => {
      setQuotes(dt);
    });
  }, []);

  return (
    <div className="quote-holder">
      {quotes.map((el) => {
        return (
          <Quote
            key={el[3]}
            author={el[0]}
            publisherName={el[1]}
            quote={el[2]}
            publisher={el[3]}
          />
        );
      })}
    </div>
  );
}
