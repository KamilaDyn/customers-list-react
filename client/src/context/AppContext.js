import {useMemo, createContext, useEffect, useState} from 'react';
import axios from 'axios';
import {baseUrl} from '../config';

export const AppContext = createContext([]);
const PageSize = 10;

const AppContextProvider = ({children}) => {
  const [customers, setCustomers] = useState([]);
  const [searchCustomer, setSearchCustomer] = useState('');
  function handleSearch(e) {
    setSearchCustomer(e.target.value.substr(0, 20));
  }

  async function getCustomers() {
    await axios
      .get(`${baseUrl}/api/customers`)
      .then((response) => {
        if (response.status === 200) {
          setCustomers(response.data);
        }
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    getCustomers();
  }, []);
  const filteredCustomers = useMemo(() => {
    return (
      customers &&
      customers.filter(
        ({second_name}) =>
          second_name.toLowerCase().indexOf(searchCustomer.toLowerCase()) !== -1
      )
    );
  }, [searchCustomer, customers]);

  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = Math.ceil(filteredCustomers.length / 10);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    if (filteredCustomers && filteredCustomers.length) {
      return filteredCustomers.slice(firstPageIndex, lastPageIndex);
    }
  }, [currentPage, filteredCustomers]);

  const handleChangePage = (action) => {
    setCurrentPage((prevPage) =>
      action === 'next' ? prevPage + 1 : prevPage - 1
    );
  };
  const value = {
    customers,
    filteredCustomers,
    handleSearch,
    handleChangePage,
    currentTableData,
    currentPage,
    totalPageCount,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContextProvider;
