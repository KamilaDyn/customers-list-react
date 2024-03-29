import { useMemo, createContext, useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../config";

export const AppContext = createContext([]);

const AppContextProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  const [searchCustomer, setSearchCustomer] = useState("");
  const [pageSize, setPageSize] = useState(10);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [modalData, setModalData] = useState(null);

  function handleSearch(e) {
    setSearchCustomer(e.target.value.substr(0, 20));
  }

  async function getCustomers() {
    await axios
      .get(baseUrl)
      .then((response) => {
        if (response.status === 200) {
          setCustomers(response.data);
          setError("");
        }
      })
      .catch((error) => setError(error.message));
  }

  useEffect(() => {
    getCustomers();
  }, []);
  const filteredCustomers = useMemo(() => {
    return (
      customers &&
      customers.filter(
        ({ second_name }) =>
          second_name.toLowerCase().indexOf(searchCustomer.toLowerCase()) !== -1
      )
    );
  }, [searchCustomer, customers]);

  const totalPageCount = Math.ceil(filteredCustomers.length / pageSize);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    if (filteredCustomers && filteredCustomers.length >= pageSize) {
      return filteredCustomers.slice(firstPageIndex, lastPageIndex);
    } else {
      setCurrentPage(1);
      return filteredCustomers;
    }
  }, [currentPage, filteredCustomers, pageSize]);

  const handleChangePage = (action) => {
    setCurrentPage((prevPage) =>
      action === "next" ? prevPage + 1 : prevPage - 1
    );
  };

  function handleModalOpen(modalData) {
    setModalData(modalData);
  }
  const value = {
    customers,
    filteredCustomers,
    handleSearch,
    handleChangePage,
    currentTableData,
    currentPage,
    totalPageCount,
    setCustomers,
    getCustomers,
    pageSize,
    setPageSize,
    error,
    handleModalOpen,
    modalData,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
