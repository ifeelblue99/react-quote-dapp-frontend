import React from 'react';
import '../style.css';
import postQuote from '../redux/reducer';
import store from '../redux/store';

export default function PostQuote() {
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
  //
  function handleSubmit(event) {
    event.preventDefault();
    // store.dispatch({
    //   type: 'add',
    //   payload: {},
    // });
  }
  //
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
