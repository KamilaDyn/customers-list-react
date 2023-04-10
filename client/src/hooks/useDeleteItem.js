import axios from 'axios';
import {baseUrl} from '../config';

export function useDeleteItem() {
  function onDelete(id) {
    axios
      .delete(`${baseUrl}/api/customers/${id}`)
      .then((response) => {
        if (response.status === 200) {
          const element = document.getElementById(id);
          element.remove();
        } else {
          console.warn(response.status);
        }
      })
      .catch((error) => console.error(error));
  }
  return onDelete;
}
