import { Card, Button, Container, InputGroup, Form } from "react-bootstrap";
import CustomerItem from "./CustomerItem";
const Customers = () => {
  return (
    <div className="my-3">
      <Button variant="primary">
        <i className="fa fa-user-plus mr-3" /> Add New Customer
      </Button>
      <div>
        <InputGroup className="my-3">
          <InputGroup.Text id="search">
            <i className="fa fa-search" />
          </InputGroup.Text>
          <Form.Control
            placeholder="Search by last name"
            aria-label="Search"
            aria-describedby="search"
          />
        </InputGroup>
      </div>
      <Card>
        <Card.Header>Customer list</Card.Header>

        {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
        <Card.Body>
          <CustomerItem />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Customers;
