import React, { Component } from "react";
import InitialState from "../../components/initial-state/initial.state";
import axios from "axios";
import Form from "../../components/form/form";

import "./add-new-customer.scss";

class AddCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      InitialState,
      displayErrors: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  addCustomer(newCustomer) {
    axios
      .request({
        method: "post",
        url: "/api/customers",
        data: newCustomer
      })
      .then(response => console.log(response))
      .then(response => this.props.history.push("/"))

      .catch(err => console.log(err));
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
    } else {
      this.addCustomer(newCustomer);
      this.setState({ displayErrors: false });
      alert("form Submitted");
    }
  }

  render() {
    const { displayErrors } = this.state;
    return (
      <div className="add-customer-container">
        <h1 className="title">New Customer</h1>
        <p>Add new customer here </p>
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

export default AddCustomer;
