import { Button } from "react-bootstrap";
import { useDeleteItem } from "../../hooks/useDeleteItem";
import { useNavigate } from "react-router-dom";

export default function CustomerItemMobile({ customer }) {
  const deleteItem = useDeleteItem(customer);
  const navigate = useNavigate();

  return (
    <div
      key={customer._id}
      className="bg-white space-y-3 p-4 rounded-lg shadow m-2 sm:flex justify-between	"
    >
      <div>
        <div className="sm:flex items-center space-x-2 text-sm">
          <div className="py-1 text-blue-500 font-bold">
            {customer.first_name} {customer.second_name}
          </div>
          <div className="py-1 text-gray-500">
            <span className="font-bold"> Mail: </span>
            {customer.email}
          </div>
          <div className="py-1 text-gray-500">
            <span className="font-bold"> Phone: </span>
            {customer.mobile_phone}{" "}
            {customer.work_phone && `/  ${customer.work_phone}`}
          </div>
        </div>
        <div className="py-2 flex items-center space-x-2 text-sm">
          <div className="text-md font-bold">Billing Address:</div>
          <div>
            {customer.billing_street} street, {customer.billing_postcode}{" "}
            {customer.billing_city}, {customer.billing_state}{" "}
            {customer.billing_country}
          </div>
        </div>
        <div className="py-2 flex items-center space-x-2 text-sm">
          <div className="text-md font-bold">Shipping Address:</div>
          <div>
            {customer.shipping_street} street, {customer.shipping_postcode}{" "}
            {customer.shipping_city}, {customer.shipping_state}{" "}
            {customer.shipping_country}
          </div>
        </div>
      </div>
      <div>
        <Button
          className="mr-2"
          variant="success"
          onClick={() => navigate(`edit/${customer._id}`)}
        >
          Edit
        </Button>
        <Button variant="danger" onClick={deleteItem}>
          Delete
        </Button>
      </div>
    </div>
  );
}
