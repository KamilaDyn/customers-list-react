import axios from "axios";
import { useContext } from "react";
import { baseUrl } from "../config";
import { AppContext } from "../context/AppContext";

export function useDeleteItem() {
  const { getCustomers } = useContext(AppContext);
  function onDelete(id) {
    axios
      .delete(`${baseUrl}/api/customers/${id}`)
      .then((response) => {
        if (response.status === 200) {
          getCustomers();
        } else {
          console.warn(response.status);
        }
      })
      .catch((error) => console.error(error));
  }
  return onDelete;
}
