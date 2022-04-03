export const quoteAbi = [
  {
    "inputs": [],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "num",
        "type": "uint256"
      }
    ],
    "name": "IndexIsOutOfRange",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "author",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "publisherName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "quote",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "publisherAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "createTime",
            "type": "uint256"
          }
        ],
        "indexed": false,
        "internalType": "struct QuoteChain.Quote",
        "name": "newQuote",
        "type": "tuple"
      }
    ],
    "name": "PostQuoteEvent",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "getAllQuotes",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "author",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "publisherName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "quote",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "publisherAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "createTime",
            "type": "uint256"
          }
        ],
        "internalType": "struct QuoteChain.Quote[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_index",
        "type": "uint256"
      }
    ],
    "name": "getQuotes",
    "outputs": [
      {
        "components": [
          {
            "internalType": "string",
            "name": "author",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "publisherName",
            "type": "string"
          },
          {
            "internalType": "string",
            "name": "quote",
            "type": "string"
          },
          {
            "internalType": "address",
            "name": "publisherAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "createTime",
            "type": "uint256"
          }
        ],
        "internalType": "struct QuoteChain.Quote",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_author",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_publisherName",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_quote",
        "type": "string"
      }
    ],
    "name": "postQuote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
],
export const quoteContractAddress = 0xe7f1725e7734ce288f8367e1bb143e90bb3f0512;
