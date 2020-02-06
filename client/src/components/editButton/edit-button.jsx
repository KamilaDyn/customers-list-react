import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import "./edit-button.scss";

const EditButton = () => (
  <div className="edit-button-container">
    <button className="edit-button">
      <FontAwesomeIcon className="icon-edit" icon={faEdit} />
      Edit
    </button>
  </div>
);

export default EditButton;
