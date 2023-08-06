import axios from "axios";
import { useContext } from "react";
import { baseUrl } from "../config";
import { AppContext } from "../context/AppContext";

export function useDeleteItem(customer) {
  const { getCustomers, handleModalOpen } = useContext(AppContext);
  function onDelete(id) {
    axios
      .delete(`${baseUrl}/${id}`)
      .then((response) => {
        if (response.status === 200) {
          getCustomers();
        } else {
          console.warn(response.status);
        }
      })
      .catch((error) => console.error(error));
  }

  const deleteItem = () => {
    const { _id, first_name, second_name } = customer;
    const modalTile = `Delete ${first_name} ${second_name}`;
    const description = "Are you sure you wan to delete customer form data ";
    const modalData = {
      title: modalTile,
      description: description,
      button1: {
        fn: () => {
          onDelete(_id);
          handleModalOpen(null);
        },
        text: "yes",
        color: "bg-red-600",
      },
      button2: { fn: () => handleModalOpen(null), text: "No" },
    };
    handleModalOpen(modalData);
  };

  return deleteItem;
}
