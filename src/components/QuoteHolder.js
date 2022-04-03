import React from 'react';
import '../style.css';
import Quote from './Quote';
import { quoteAbi, quoteContractAddress } from '../contract/abi-address.js';
import { ethers } from 'ethers';

export default function QuoteHolder() {
  const [quotes, setQuotes] = React.useState([]);
  const [eventCount, setEventCount] = React.useState(0);
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const quoteSmartContract = new ethers.Contract(
    quoteContractAddress,
    quoteAbi,
    provider
  );

  React.useEffect(() => {
    quoteSmartContract.getAllQuotes().then((dt) => {
      setQuotes(dt);
      console.log(dt);
    });
  }, []);

  return (
    <div className="quote-holder">
      {quotes.map((el) => {
        return (
          <Quote
            key={el[4].hex}
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
/*
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
  quoteSmartContract.on('PostQuoteEvent', (newQuote, event)=>{
    console.log(newQuote)
    //setQuotes(prev=>[...prev, newQuote])
  });
  React.useEffect(() => {
    quoteSmartContract.getAllQuotes().then((dt) => {
      setQuotes(dt);
      console.log(dt);
    });
  }, []);

  return (
    <div className="quote-holder">
      {quotes.map((el) => {
        return (
          <Quote
            key={el[4].Hex}
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

*/
