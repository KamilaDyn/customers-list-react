import React, { Component } from "react";
import { Link } from "react-router-dom";
import EditButton from "../editButton/edit-button";
import "../../pages/homepage/homepage.scss";
import DeleteButton from "../delete-customer/delete-customer";

class CustomerItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: props.customer
    };
  }

  render() {
    const { customer } = this.state;
    return (
      <React.Fragment>
        <tr id={customer._id} className="desktop desktop-row">
          <td>{customer.first_name}</td>
          <td>{customer.last_name}</td>
          <td className="mobile-phone">{customer.cell_phone}</td>
          <td className="phone"> {customer.phone}</td>
          <td className="email">{customer.email}</td>
          <td>
            {customer.shipping_street}&nbsp;{customer.shipping_number}
          </td>
          <td>{customer.shipping_postcode}</td>
          <td>{customer.shipping_city}</td>
          <td>{customer.shipping_state}</td>
          <td>{customer.shipping_country}</td>
          <td>
            {customer.billing_street}&nbsp;{customer.billing_number}
          </td>
          <td>{customer.billing_postcode}</td>
          <td>{customer.billing_city}</td>
          <td> {customer.billing_state}</td>
          <td>{customer.billing_country}</td>
          <td className="not-print">
            <Link to={`/edit/${customer._id}`}>
              <EditButton />
            </Link>
          </td>

          <td className="not-print">
            <DeleteButton customer={customer} />
          </td>
        </tr>
        <tr className="mobile not-print ">
          <td>{customer.first_name}</td>
          <td>{customer.last_name}</td>
          <td>
            1:&nbsp;{customer.cell_phone} <br />
            2:&nbsp;{customer.phone}
          </td>
          <td>{customer.email}</td>
          <td>
            street: {customer.shipping_street} <br /> number:&nbsp;
            {customer.shipping_number} <br /> postcode:&nbsp;
            {customer.shipping_postcode} <br />
            city:&nbsp; {customer.shipping_city} <br /> state:
            {customer.shipping_state} <br /> country:&nbsp;
            {customer.shipping_country}
          </td>
          <td>
            street: {customer.billing_street} <br /> number:&nbsp;
            {customer.billing_number} <br /> postcode:&nbsp;
            {customer.billing_postcode} <br />
            city:&nbsp; {customer.billing_city} <br /> state:
            {customer.billing_state} <br /> country:&nbsp;
            {customer.billing_country}
          </td>
          <td className="not-print">
            <Link to={`/edit/${customer._id}`}>
              <EditButton />
            </Link>
            <br />
            <DeleteButton customer={customer} />
          </td>
        </tr>
      </React.Fragment>
    );
  }
}

export default CustomerItem;
