import { useEffect, useState } from "react";
import axios from "axios";

export function useHomePage() {
  const [customers, setCustomers] = useState();
  const [searchCustomer, setSearchCustomer] = useState("");

  function handleSearch(e) {
    setSearchCustomer(e.target.value.substr(0, 20));
  }

  async function getCustomer() {
    await axios
      .get("http://localhost:5000/api/customers")
      // .then((resp) => resp.json())
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // setCustomers(response.data);
          setCustomers(response.data);
        }
      })
      .catch((error) => console.log(error));
  }
  const filteredCustomers =
    customers &&
    customers.filter(
      ({ second_name }) =>
        second_name.toLowerCase().indexOf(searchCustomer.toLowerCase()) !== -1
    );

  useEffect(() => {
    // axios
    //   .get("http://localhost:5000/api/customers")
    //   // .then((resp) => resp.json())
    //   .then((response) => {
    //     console.log(response);
    //     if (response.status === 200) {
    //       setCustomers(response.data);
    //     }
    //   })
    //   .catch((error) => console.log(error));
    getCustomer();
  }, []);

  return { customers, handleSearch, filteredCustomers, getCustomer };
}
