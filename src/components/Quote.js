import React from 'react';
import '../style.css';

export default function Quote(props) {
  return (
    <div className="quote">
      <div className="headers">
        <span>{props.author}</span>
        <span>{props.publisherName}</span>
      </div>
      <p>{props.quote}</p>
      <div className="footers">
        <span>{props.publisher}</span>
      </div>
    </div>
  );
}
