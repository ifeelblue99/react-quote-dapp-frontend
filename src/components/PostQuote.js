import React from 'react';
import { ethers } from 'ethers';
import { quoteAbi, quoteContractAddress } from '../contract/abi-address.js';
import '../style.css';
import { useSelector } from 'react-redux';

export default function PostQuote() {
  //
  const signer = new ethers.providers.Web3Provider(window.ethereum).getSigner();
  const quoteSmartContract = new ethers.Contract(
    quoteContractAddress,
    quoteAbi,
    signer
  );

  //
  const isConnected = useSelector((state) => state.conncted);
  const [formData, setFormData] = React.useState({
    author: '',
    publisherName: '',
    quote: '',
  });
  //
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(formData);
  }
  // submit
  async function handleSubmit(event) {
    event.preventDefault();
    if (!isConnected) return;
    const { author, publisherName, quote } = formData;
    quoteSmartContract
      .postQuote(author, publisherName, quote)
      .then((dt) => console.log(dt));
  }

  return (
    <div className="post">
      <h2>Post quote</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          name="author"
          type="text"
          value={formData.author}
          placeholder="Author"
        />
        <input
          onChange={handleChange}
          name="publisherName"
          type="text"
          value={formData.publisherName}
          placeholder="Your name"
        />
        <textarea
          onChange={handleChange}
          name="quote"
          value={formData.quote}
          placeholder="Quote"
        />
        <button id="post-button">Post</button>
      </form>
    </div>
  );
}
