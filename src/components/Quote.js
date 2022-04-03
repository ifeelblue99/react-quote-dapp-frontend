import React from 'react';
import '../style.css';

export default function Quote(props) {
  return (
    <div className="quote">
      <div className="headers">
        <span>Author: {props.auther}</span>
        <span>publisher name: {props.publisherName}</span>
      </div>
      <p>Quote itself: {props.quote}</p>
      <div className="footers">
        <span>0x/864513971798245a8fsc1r82xw1d :{props.publisher}</span>
        <span>15:25:50: {props.time}</span>
      </div>
    </div>
  );
}
