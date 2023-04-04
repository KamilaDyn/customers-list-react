import { Button, Container, InputGroup, Form } from "react-bootstrap";
import "./homepage.scss";
import { useHomePage } from "./utils";
import { CustomerItem } from "../components";

const HomePage = () => {
  const { filteredCustomers, handleSearch } = useHomePage();

  const customerItems = filteredCustomers?.map((customer, i) => {
    return <CustomerItem key={customer._id} customer={customer} />;
  });
  return (
    <div className="home-page wrapper">
      <div className="button-container">
        <Button>Add user</Button>
        <Button>Print column</Button>
      </div>

      <InputGroup className="my-3 search">
        <InputGroup.Text id="search">
          <i className="fa fa-search" />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search by last name"
          aria-label="Search"
          aria-describedby="search"
          onChange={handleSearch}
        />
      </InputGroup>
      <div>
        <table id="table" className="table">
          <thead className="desktop desktop-thead">
            <tr className="details-row">
              <th colSpan="2">Name</th>
              <th colSpan="2">Phone</th>
              <th rowSpan="2">Email</th>
              <th colSpan="5">Billing address</th>
              <th colSpan="5">Delivery address</th>
              <th colSpan="2" className="not-print">
                Actions
              </th>
            </tr>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>phone 1</th>
              <th>phone 2</th>
              <th>street</th>
              <th>postcode</th>
              <th>city</th>
              <th>state</th>
              <th>country</th>
              <th>street</th>
              <th>postcode</th>
              <th>city</th>
              <th>state</th>
              <th>country</th>
              <th className="not-print">edit</th>
              <th className="not-print">delete</th>
            </tr>
          </thead>
          <thead className="mobile not-print">
            <tr className="details-row">
              <th>First Name</th>
              <th>Last Name</th>
              <th>Phone</th>
              <th className="email">Email</th>
              <th>Billing address</th>
              <th>Delivery address</th>
              <th className="not-print">Actions</th>
            </tr>
          </thead>
          {/* <tbody>{customerItems}</tbody> */}
          <tbody>{customerItems}</tbody>
        </table>
      </div>
    </div>
  );
};

export default HomePage;
