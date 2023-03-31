import React, { Component } from "react";
import { Link } from "react-router-dom";
import EditButton from "../editButton/edit-button";
import "../../pages/homepage/homepage.scss";
import DeleteButton from "../delete-customer/delete-customer";

const CustomerItem = props => (
  <>
    <tr id={props.customer._id} className="desktop desktop-row">
      <td>{props.customer.first_name}</td>
      <td>{props.customer.last_name}</td>
      <td className="mobile-phone">{props.customer.cell_phone}</td>
      <td className="phone"> {props.customer.phone}</td>
      <td className="email">{props.customer.email}</td>
      <td>
        {props.customer.shipping_street}&nbsp;{props.customer.shipping_number}
      </td>
      <td>{props.customer.shipping_postcode}</td>
      <td>{props.customer.shipping_city}</td>
      <td>{props.customer.shipping_state}</td>
      <td>{props.customer.shipping_country}</td>
      <td>
        {props.customer.billing_street}&nbsp;{props.customer.billing_number}
      </td>
      <td>{props.customer.billing_postcode}</td>
      <td>{props.customer.billing_city}</td>
      <td> {props.customer.billing_state}</td>
      <td>{props.customer.billing_country}</td>
      <td className="not-print">
        <Link to={`/edit/${props.customer._id}`}>
          <EditButton />
        </Link>
      </td>

      <td className="not-print">
        <DeleteButton customer={props.customer} />
      </td>
    </tr>
    <tr className="mobile not-print ">
      <td>{props.customer.first_name}</td>
      <td>{props.customer.last_name}</td>
      <td>
        1:&nbsp;{props.customer.cell_phone} <br />
        2:&nbsp;{props.customer.phone}
      </td>
      <td>{props.customer.email}</td>
      <td>
        street: {props.customer.shipping_street} <br /> number:&nbsp;
        {props.customer.shipping_number} <br /> postcode:&nbsp;
        {props.customer.shipping_postcode} <br />
        city:&nbsp; {props.customer.shipping_city} <br /> state:
        {props.customer.shipping_state} <br /> country:&nbsp;
        {props.customer.shipping_country}
      </td>
      <td>
        street: {props.customer.billing_street} <br /> number:&nbsp;
        {props.customer.billing_number} <br /> postcode:&nbsp;
        {props.customer.billing_postcode} <br />
        city:&nbsp; {props.customer.billing_city} <br /> state:
        {props.customer.billing_state} <br /> country:&nbsp;
        {props.customer.billing_country}
      </td>
      <td className="not-print">
        <Link to={`/edit/${props.customer._id}`}>
          <EditButton />
        </Link>
        <br />
        <DeleteButton customer={props.customer} />
      </td>
    </tr>
  </>
);

export default CustomerItem;
