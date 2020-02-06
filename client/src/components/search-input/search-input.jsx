import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./search-input.scss";

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }

  render() {
    return (
      <div className="search-container">
        <input
          className="input-search"
          type="text"
          placeholder="search by last name"
          onChange={this.props.handleSearch}
          value={this.props.search}
        />
        <FontAwesomeIcon className="icon" icon={faSearch} />
      </div>
    );
  }
}

export default SearchInput;
