import React, { Component } from "react";
import axios from "axios";
import Form from "../../components/form/form";

import "./edit-customer.css";

class EditCustomer extends Component {
  state = {
    displayErrors: false
  };

  componentDidMount() {
    this.getCustomer();
  }

  getCustomer() {
    const {
      match: { params }
    } = this.props;

    axios
      .get(`/api/customers/${params.id}`)
      .then(response => {
        this.setState(
          {
            _id: response.data._id,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            email: response.data.email,
            cell_phone: response.data.cell_phone,
            phone: response.data.phone,
            shipping_street: response.data.shipping_street,
            shipping_number: response.data.shipping_number,
            shipping_postcode: response.data.shipping_postcode,
            shipping_city: response.data.shipping_city,
            shipping_state: response.data.shipping_state,
            shipping_country: response.data.shipping_country,
            billing_street: response.data.billing_street,
            billing_number: response.data.billing_number,
            billing_postcode: response.data.billing_postcode,
            billing_city: response.data.billing_city,
            billing_state: response.data.billing_state,
            billing_country: response.data.billing_country
          },
          () => console.log(this.state)
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  };

  editCustomer(newCustomer) {
    axios
      .request({
        method: "put",
        url: `/api/customers/${this.state._id}`,
        data: newCustomer
      })
      .then(response => console.log(response))
      .then(repsonse => this.props.history.push("/"))
      .catch(error => console.log(error));
  }

  handleSubmit(e) {
    e.preventDefault();
    const newCustomer = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      email: this.state.email,
      cell_phone: this.state.cell_phone,
      phone: this.state.phone,
      shipping_street: this.state.shipping_street,
      shipping_number: this.state.shipping_number,
      shipping_postcode: this.state.shipping_postcode,
      shipping_city: this.state.shipping_city,
      shipping_state: this.state.shipping_state,
      shipping_country: this.state.shipping_country,
      billing_street: this.state.billing_street,
      billing_number: this.state.billing_number,
      billing_postcode: this.state.billing_postcode,
      billing_city: this.state.billing_city,
      billing_state: this.state.billing_state,
      billing_country: this.state.billing_country
    };
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      this.setState({
        displayErrors: true
      });
      e.stopPropagation();
      // alert("form has errors");
    } else {
      this.editCustomer(newCustomer);
      this.setState({ displayErrors: false });
      alert("form Submitted");
    }
  }

  render() {
    const { displayErrors } = this.state;
    return (
      <div className="edit-customer-container">
        <h1 className="title">Edit Customer</h1>
        <p>Edit customer here </p>
        <hr />
        <Form
          noValidate
          {...this.state}
          onChange={this.handleChange}
          onSubmit={e => this.handleSubmit(e)}
          className={displayErrors ? "displayErrors" : ""}
        />
      </div>
    );
  }
}

export default EditCustomer;
