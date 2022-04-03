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

  React.useEffect(() => {
    quoteSmartContract.on('PostQuoteEvent', (newQuote, event) => {
      console.log(newQuote) / setQuotes((prev) => [...prev, newQuote]);
    });
  }, []);

  return (
    <div className="quote-holder">
      {quotes.map((el) => {
        return (
          <Quote
            key={el[4]._hex}
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
