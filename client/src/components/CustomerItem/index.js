import { CustomButton } from "../../components";
import { useCustomerItem } from "./utils";
import { Button } from "react-bootstrap";

function TableDiv({ children }) {
  return <td className="p-2 text-md text-gray-700 hover:white">{children}</td>;
}

function CustomerItem({ customer }) {
  const onDelete = useCustomerItem();
  const {
    first_name,
    second_name,
    mobile_phone,
    work_phone,
    email,
    billing_street,
    shipping_country,
    shipping_zipcode,
    billing_city,
    billing_zipcode,
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
      <tr
        id={customer._id}
        className="hover:bg-gray-300 focus:ring odd:bg-white even:bg-slate-50"
      >
        <TableDiv>{first_name}</TableDiv>
        <TableDiv>{second_name}</TableDiv>
        <TableDiv className="mobile-phone">{mobile_phone}</TableDiv>
        <TableDiv className="phone">
          {" "}
          {work_phone ? work_phone : "none"}
        </TableDiv>
        <TableDiv className="email">{email}</TableDiv>
        <TableDiv>
          {shipping_street}&nbsp;{shipping_number}
        </TableDiv>
        <TableDiv>{shipping_zipcode}</TableDiv>
        <TableDiv>{shipping_city}</TableDiv>
        <TableDiv>{shipping_state}</TableDiv>
        <TableDiv>{shipping_country}</TableDiv>
        <TableDiv>
          {billing_street}&nbsp;{billing_number}
        </TableDiv>
        <TableDiv>{billing_zipcode}</TableDiv>
        <TableDiv>{billing_city}</TableDiv>
        <TableDiv> {billing_state}</TableDiv>
        <TableDiv>{billing_country}</TableDiv>
        <TableDiv className="not-print ">
          <Button variant="success">Edit</Button>
        </TableDiv>

        <TableDiv className="not-print ">
          <Button variant="danger" onClick={onDelete.bind(this, customer._id)}>
            Delete
          </Button>
        </TableDiv>
      </tr>
      {/* <tr className="mobile not-print ">
        <TableDiv>{first_name}</TableDiv>
        <TableDiv>{second_name}</TableDiv>
        <TableDiv>
          1:&nbsp;{mobile_phone} <br />
          2:&nbsp;{work_phone}
        </TableDiv>
        <TableDiv>{email}</TableDiv>
        <TableDiv>
          street: {shipping_street} <br /> number:&nbsp;
          {shipping_number} <br /> postcode:&nbsp;
          {shipping_postcode} <br />
          city:&nbsp; {shipping_city} <br /> state:
          {shipping_state} <br /> country:&nbsp;
          {shipping_country}
        </TableDiv>
        <TableDiv>
          street: {billing_street} <br /> number:&nbsp;
          {billing_number} <br /> postcode:&nbsp;
          {billing_postcode} <br />
          city:&nbsp; {billing_city} <br /> state:
          {customer.billing_state} <br /> country:&nbsp;
          {customer.billing_country}
        </TableDiv>
        <TableDiv className="not-print">
          <CustomButton variant="success">Edit</CustomButton>
          <CustomButton variant="danger">Delete</CustomButton>
        </TableDiv>
      </tr> */}
    </>
  );
}

export default CustomerItem;
