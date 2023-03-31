import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import "./edit-button.css";

const EditButton = () => (
  <>
    <button className="edit-button">
      <FontAwesomeIcon className="icon-edit" icon={faEdit} />
      Edit
    </button>
  </>
);

export default EditButton;
