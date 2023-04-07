import { Button } from "react-bootstrap";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import { TableDiv } from "../atoms";
import { useNavigate } from "react-router-dom";

function CustomerItem({ customer }) {
  const onDelete = useDeleteItem();
  const {
    _id,
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
  const navigate = useNavigate();
  return (
    <>
      <tr
        id={_id}
        className="hover:bg-gray-300 focus:ring odd:bg-white even:bg-slate-50"
      >
        <TableDiv>{first_name}</TableDiv>
        <TableDiv>{second_name}</TableDiv>
        <TableDiv className="mobile-phone">{mobile_phone}</TableDiv>
        <TableDiv className="phone">
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
          <Button variant="success" onClick={() => navigate(`edit/${_id}`)}>
            Edit
          </Button>
        </TableDiv>

        <TableDiv className="not-print ">
          <Button variant="danger" onClick={onDelete.bind(this, customer._id)}>
            Delete
          </Button>
        </TableDiv>
      </tr>
    </>
  );
}

export default CustomerItem;
