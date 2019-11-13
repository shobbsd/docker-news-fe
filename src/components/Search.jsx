/* eslint-disable react/prop-types */

import React, { useState } from "react";

export default function Search({ filterArticles }) {
  const [input, setInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    setInput("");
  };

  const handleChange = ({ target }) => {
    setInput(target.value);
    filterArticles(target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Search for an article:{" "}
          <input
            autoFocus
            type="text"
            value={input}
            onChange={handleChange}
            className="search-input"
          />
        </label>{" "}
        <button className="clear-button">Clear</button>
      </form>
    </div>
  );
}
