import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./search-input.css";

const SearchInput = props => (
  <div className="search-container">
    <input
      className="input-search"
      type="text"
      placeholder="search by last name"
      onChange={props.handleSearch}
      value={props.search}
    />
    <FontAwesomeIcon className="icon" icon={faSearch} />
  </div>
);

export default SearchInput;
