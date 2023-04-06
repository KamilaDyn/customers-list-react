import { useEffect, useState } from "react";
import axios from "axios";

export function useCustomers() {
  const [customers, setCustomers] = useState([]);
  const [searchCustomer, setSearchCustomer] = useState("");
  function handleSearch(e) {
    setSearchCustomer(e.target.value.substr(0, 20));
  }
  const filteredCustomers =
    customers &&
    customers.filter(
      ({ second_name }) =>
        second_name.toLowerCase().indexOf(searchCustomer.toLowerCase()) !== -1
    );
  async function getCustomers() {
    await axios
      .get("http://localhost:5000/api/customers")
      // .then((resp) => resp.json())
      .then((response) => {
        if (response.status === 200) {
          // setCustomers(response.data);
          // setFilteredCustomers(response.data);
          setCustomers(response.data);
          // setFilteredCustomers(response.data);
        }
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    if (!customers.length) {
      getCustomers();
    }
  }, [customers]);
  return {
    customers,
    handleSearch,
    getCustomers,
    setCustomers,
    filteredCustomers,
  };
}
