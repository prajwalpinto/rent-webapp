"use client";
import { useState, useEffect } from "react";

function SearchBox({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Debounce function to avoid excessive API calls (optional)
  const debounce = (func) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, args), 500);
    };
  };

  const handleSearchTermChange = debounce((e) => setSearchTerm(e.target.value));

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm); // Call the provided onSearch function with the search term
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="search">Search Address:</label>
      <input
        type="text"
        id="search"
        value={searchTerm}
        onChange={handleSearchTermChange}
        placeholder="Enter address..."
      />
      <button type="submit">Find</button>
    </form>
  );
}

export default SearchBox;
