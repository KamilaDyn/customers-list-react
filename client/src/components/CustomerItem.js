import { CustomButton } from "../components";

function CustomerItem({ customer }) {
  const {
    first_name,
    second_name,
    mobile_phone,
    work_phone,
    email,
    billing_street,
    shipping_country,
    shipping_postcode,
    billing_city,
    billing_postcode,
    shipping_city,
    billing_number,
    billing_state,
    billing_country,
    shipping_state,
    shipping_number,
    shipping_street,
  } = customer;

  return (
    <>
      <tr id={customer._id} className="desktop desktop-row">
        <td>{first_name}</td>
        <td>{second_name}</td>
        <td className="mobile-phone">{mobile_phone}</td>
        <td className="phone"> {work_phone}</td>
        <td className="email">{email}</td>
        <td>
          {shipping_street}&nbsp;{shipping_number}
        </td>
        <td>{shipping_postcode}</td>
        <td>{shipping_city}</td>
        <td>{shipping_state}</td>
        <td>{shipping_country}</td>
        <td>
          {customer.billing_street}&nbsp;{billing_number}
        </td>
        <td>{billing_postcode}</td>
        <td>{billing_city}</td>
        <td> {billing_state}</td>
        <td>{billing_country}</td>
        <td className="not-print ">
          <CustomButton variant="success">Edit</CustomButton>
        </td>

        <td className="not-print ">
          <CustomButton variant="danger">Delete</CustomButton>
        </td>
      </tr>
      <tr className="mobile not-print ">
        <td>{first_name}</td>
        <td>{second_name}</td>
        <td>
          1:&nbsp;{mobile_phone} <br />
          2:&nbsp;{work_phone}
        </td>
        <td>{email}</td>
        <td>
          street: {shipping_street} <br /> number:&nbsp;
          {shipping_number} <br /> postcode:&nbsp;
          {shipping_postcode} <br />
          city:&nbsp; {shipping_city} <br /> state:
          {shipping_state} <br /> country:&nbsp;
          {shipping_country}
        </td>
        <td>
          street: {billing_street} <br /> number:&nbsp;
          {billing_number} <br /> postcode:&nbsp;
          {billing_postcode} <br />
          city:&nbsp; {billing_city} <br /> state:
          {customer.billing_state} <br /> country:&nbsp;
          {customer.billing_country}
        </td>
        <td className="not-print">
          <CustomButton variant="success">Edit</CustomButton>
          <CustomButton variant="danger">Delete</CustomButton>
        </td>
      </tr>
    </>
  );
}

export default CustomerItem;
