import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./addButton.css";

const AddButton = () => (
  <div className="add-button-container">
    <a href="/add">
      <button className="add-button">
        <FontAwesomeIcon className="icon-plus" icon={faPlus} />
        add New
      </button>
    </a>
  </div>
);

export default AddButton;
