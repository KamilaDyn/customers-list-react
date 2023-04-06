import axios from "axios";

export function useDeleteItem() {
  function onDelete(id) {
    axios
      .delete(`http://localhost:5000/api/customers/${id}`)
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
