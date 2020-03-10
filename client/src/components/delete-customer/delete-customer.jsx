import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import axios from "axios";
import "./delete-button.css";
class DeleteButton extends Component {
  onDelete = props => {
    const contactId = props.customer._id;
    axios
      .delete(`api/customers/${contactId}`)
      // .then(response => console.log(response))
      .then(response => {
        this.props.history.push("/");
      })
      .catch(error => console.log(error));

    let element = document.getElementById(contactId);
    element.remove();
  };
  render() {
    return (
      <button
        className="delete-button"
        onClick={e => {
          if (window.confirm("Are you sure, you want to delate contact?")) {
            this.onDelete(e);
          }
        }}
      >
        <FontAwesomeIcon className="icon-trash" icon={faTrash} />
        Delete
      </button>
    );
  }
}

export default withRouter(DeleteButton);
