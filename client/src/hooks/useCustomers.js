import { useMemo, useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../context/AppContext";

export function useCustomers() {
  let PageSize = 10;

  const { customers } = useContext(AppContext);
  // const [customers, setCustomers] = useState([]);
  const [searchCustomer, setSearchCustomer] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  // async function getCustomers() {
  //   await axios
  //     .get(`http://localhost:5000/api/customers`)
  //     // .then((resp) => resp.json())
  //     .then((response) => {
  //       if (response.status === 200) {
  //         // setCustomers(response.data);
  //         // setFilteredCustomers(response.data);
  //         setCustomers(response.data);
  //         // setFilteredCustomers(response.data);
  //       }
  //     })
  //     .catch((error) => console.log(error));
  // }
  function handleSearch(e) {
    setSearchCustomer(e.target.value.substr(0, 20));
  }

  const filteredCustomers = useMemo(() => {
    return (
      customers &&
      customers.filter(
        ({ second_name }) =>
          second_name.toLowerCase().indexOf(searchCustomer.toLowerCase()) !== -1
      )
    );
  }, [searchCustomer]);
  // const filteredCustomers =
  //   customers &&
  //   customers.filter(
  //     ({ second_name }) =>
  //       second_name.toLowerCase().indexOf(searchCustomer.toLowerCase()) !== -1
  //   );

  // useEffect(() => {
  //   if (!customers.length) {
  //     getCustomers();
  //   }
  // }, [customers]);
  return {
    customers,
    handleSearch,
    // getCustomers,
    // setCustomers,
    filteredCustomers,
    setCurrentPage,
  };
}
