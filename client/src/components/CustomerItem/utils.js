import axios from "axios";
import { useHomePage } from "../../pages//utils";
export function useCustomerItem() {
  const { getCustomer } = useHomePage();

  function onDelete(id) {
    axios
      .delete(`http://localhost:5000/api/customers/${id}`)
      .then((response) => {
        console.log(response.status === 200);
        if (response.status === 200) {
          const element = document.getElementById(id);
          element.remove();
          //   getCustomer();
        } else {
          console.warn(response.status);
        }
      })
      .catch((error) => console.error(error));
  }
  return onDelete;
}
