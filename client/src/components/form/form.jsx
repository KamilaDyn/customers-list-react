import React, { Component } from "react";
import Input from "../input/input";
import PropTypes from "prop-types";
import "./form.css";

const Form = ({
  onChange,
  onSubmit,
  first_name,
  last_name,
  email,
  cell_phone,
  phone,
  shipping_street,
  shipping_number,
  shipping_postcode,
  shipping_city,
  shipping_state,
  shipping_country,
  billing_street,
  billing_number,
  billing_postcode,
  billing_city,
  billing_state,
  billing_country
}) => (
  <div className="form-container">
    <form className="form" onSubmit={onSubmit}>
      <div className="input-container">
        <Input
          type="text"
          name="first_name"
          label="Name"
          value={first_name}
          onChange={onChange}
          required
        />
        <Input
          type="text"
          name="last_name"
          label="Last name"
          value={last_name}
          onChange={onChange}
          required
        />
      </div>
      <div className="input-container">
        <Input
          className="email"
          type="email"
          name="email"
          label="email"
          value={email}
          onChange={onChange}
          required
        />
      </div>
      <div className="input-container">
        <Input
          type="text"
          name="cell_phone"
          label="Phone number 1"
          pattern="\d+"
          value={cell_phone}
          onChange={onChange}
          required
        />
        <Input
          id="phone2"
          type="text"
          name="phone"
          label="Phone number 2 (optional)"
          value={phone}
          pattern="\d+"
          onChange={onChange}
        />
      </div>
      <div className="address-input-container">
        <div className="shipping-address-container">
          <h2 className="subtitle">Delivery address</h2>
          <Input
            type="text"
            name="shipping_street"
            label="Street"
            value={shipping_street}
            onChange={onChange}
            required
          />
          <Input
            type="text"
            name="shipping_number"
            label="Number"
            value={shipping_number}
            onChange={onChange}
            required
          />
          <Input
            type="text"
            name="shipping_postcode"
            label="Postcode"
            value={shipping_postcode}
            onChange={onChange}
            required
          />
          <Input
            type="text"
            name="shipping_city"
            label="City"
            value={shipping_city}
            onChange={onChange}
            required
          />
          <Input
            type="text"
            name="shipping_state"
            label="State"
            value={shipping_state}
            onChange={onChange}
            required
          />
          <Input
            type="text"
            name="shipping_country"
            label="Country"
            value={shipping_country}
            onChange={onChange}
            required
          />
        </div>
        <div className="billing-address-container">
          <h2 className="subtitle">Billing address</h2>
          <Input
            type="text"
            name="billing_street"
            label="Street"
            value={billing_street}
            onChange={onChange}
            required
          />
          <Input
            type="text"
            name="billing_number"
            label="Number"
            value={billing_number}
            onChange={onChange}
            required
          />
          <Input
            type="text"
            name="billing_postcode"
            label="Postcode"
            value={billing_postcode}
            onChange={onChange}
            required
          />
          <Input
            type="text"
            name="billing_city"
            label="City"
            value={billing_city}
            onChange={onChange}
            required
          />
          <Input
            type="text"
            name="billing_state"
            label="State"
            value={billing_state}
            onChange={onChange}
            required
          />
          <Input
            type="text"
            name="billing_country"
            label="Country"
            value={billing_country}
            onChange={onChange}
            required
          />
        </div>
      </div>
      <button className="submit-button" type="submit" value="save">
        Submit
      </button>
    </form>
  </div>
);

Form.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  first_name: PropTypes.string.isRequired,
  last_name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  cell_phone: PropTypes.string.isRequired,
  phone: PropTypes.string,
  shipping_street: PropTypes.string.isRequired,
  shipping_number: PropTypes.string.isRequired,
  shipping_postcode: PropTypes.string.isRequired,
  shipping_city: PropTypes.string.isRequired,
  shipping_state: PropTypes.string.isRequired,
  shipping_country: PropTypes.string.isRequired,
  billing_street: PropTypes.string.isRequired,
  billing_number: PropTypes.string.isRequired,
  billing_postcode: PropTypes.string.isRequired,
  billing_city: PropTypes.string.isRequired,
  billing_state: PropTypes.string.isRequired,
  billing_country: PropTypes.string.isRequired
};

export default Form;
