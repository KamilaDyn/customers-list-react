import React, { Component } from "react";
import axios from "axios";
import CustomerItem from "../../components/customer-item/customer-item";
import SearchInput from "../../components/search-input/search-input";
import PrintButton from "../../components/print-button/print-button";
import AddButton from "../../components/addButton/addButton";

import "./homepage.scss";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      search: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
  }
  handleSearch(e) {
    this.setState({ search: e.target.value.substr(0, 20) });
    console.log("works");
  }
  componentDidMount() {
    this.getCustomers();
  }

  async getCustomers() {
    await axios
      .get("/api/customers")
      .then(response => {
        console.log(response);
        this.setState({
          customers: response.data
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    let filteredCustomers = this.state.customers.filter(customer => {
      return (
        customer.last_name
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });
    const customerItems = filteredCustomers.map((customer, i) => {
      return <CustomerItem key={customer._id} customer={customer} />;
    });

    return (
      <React.Fragment>
        <div className="button-container">
          <AddButton />
          <PrintButton />
        </div>
        <SearchInput {...this.state} handleSearch={this.handleSearch} />
        <div id="homepage" className="home-page">
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
                <th>First</th>
                <th>Last</th>
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
            <tbody>{customerItems}</tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default HomePage;
