import { useEffect, useContext, useState, useCallback } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config";
import { AppContext } from "../context/AppContext";

const initialCustomer = {
  first_name: "",
  mobile_phone: "",
  second_name: "",
  email: "",
  work_phone: "",
  billing_street: "",
  billing_number: "",
  billing_zipcode: "",
  billing_city: "",
  billing_state: "",
  billing_country: "",
  shipping_street: "",
  shipping_number: "",
  shipping_zipcode: "",
  shipping_city: "",
  shipping_state: "",
  shipping_country: "",
};

export function useForm() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const { id } = useParams();
  const { getCustomers, handleModalOpen } = useContext(AppContext);
  const [customerObject, setCustomerObject] = useState(initialCustomer);

  function finUser() {
    axios
      .get(`${baseUrl}/${id}`)
      .then((response) => {
        setCustomerObject(response.data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }

  const findOneUser = useCallback(() => {
    const user = finUser();
    return user;
  }, []);

  function addCustomer(newCustomer) {
    axios
      .request({
        method: "post",
        url: baseUrl,
        data: newCustomer,
      })
      .then((response) => {
        if (response.status === 200) {
          getCustomers();
          navigate("/");
        } else {
          console.warn(response.status.code);
        }
      })

      .catch((err) => console.error(err.message));
  }
  function editCustomer(newCustomer) {
    axios
      .request({
        method: "put",
        url: `${baseUrl}/${id}`,
        data: newCustomer,
      })
      .then((response) => {
        if (response.status === 200) {
          getCustomers();
        }
      })
      .catch((error) => console.error(error.message));
  }
  function handleChecked(e) {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setCustomerObject((prevValue) => {
        const {
          billing_street,
          billing_number,
          billing_zipcode,
          billing_city,
          billing_state,
          billing_country,
        } = prevValue;
        return {
          ...prevValue,
          shipping_street: billing_street,
          shipping_number: billing_number,
          shipping_zipcode: billing_zipcode,
          shipping_city: billing_city,
          shipping_state: billing_state,
          shipping_country: billing_country,
        };
      });
    } else {
      setCustomerObject((prevValue) => {
        const {
          shipping_street,
          shipping_number,
          shipping_zipcode,
          shipping_city,
          shipping_state,
          shipping_country,
        } = prevValue;
        return {
          ...prevValue,
          shipping_street: shipping_street,
          shipping_number: shipping_number,
          shipping_zipcode: shipping_zipcode,
          shipping_city: shipping_city,
          shipping_state: shipping_state,
          shipping_country: shipping_country,
        };
      });
    }
  }

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setCustomerObject((prevCustomer) => {
      return { ...prevCustomer, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const isFormValid = form.checkValidity();
    if (isFormValid) {
      const { first_name, second_name } = customerObject;
      if (id) {
        const modalTile = `Edit data for ${first_name} ${second_name} have been change `;
        const description =
          "Data was successfully edited, keep editing or come back to main page.";
        const modalData = {
          title: modalTile,
          description: description,
          button1: {
            fn: () => {
              navigate("/");
              handleModalOpen(null);
            },
            text: "back to home page",
          },
          button2: { fn: () => handleModalOpen(null), text: "Edit more" },
        };
        editCustomer(customerObject);
        handleModalOpen(modalData);
      } else {
        console.log(customerObject);
        addCustomer(customerObject);
      }
    }
  }
  const personalData = [
    {
      text: "First name",
      name: "first_name",
      placeholder: "Enter first name",
      value: customerObject.first_name,
    },
    {
      text: "Last Name",
      name: "second_name",
      placeholder: "Enter last name",
      value: customerObject.second_name,
    },
    {
      text: "Email",
      name: "email",
      placeholder: "Enter email",
      value: customerObject.email,
      type: "email",
    },
  ];

  const phoneNumbers = [
    {
      text: "Mobile phone",
      name: "mobile_phone",
      placeholder: "Enter mobile number phone",
      value: customerObject.mobile_phone,
      required: true,
    },
    {
      text: "Second work phone",
      name: "work_phone",
      placeholder: "Enter work number phone",
      value: customerObject.work_phone,
      required: false,
    },
  ];
  const billingAddressFields = [
    {
      text: "Street name",
      name: "billing_street",
      placeholder: "Enter street",
      value: customerObject.billing_street,
    },
    {
      text: "Number",
      name: "billing_number",
      placeholder: "Enter home number",
      value: customerObject.billing_number,
    },
    {
      text: "Post code",
      name: "billing_zipcode",
      placeholder: "Enter post code",
      value: customerObject.billing_zipcode,
    },
    {
      text: "City name",
      name: "billing_city",
      placeholder: "Enter city name",
      value: customerObject.billing_city,
    },
    {
      text: "State",
      name: "billing_state",
      placeholder: "Enter state name",
      value: customerObject.billing_state,
    },
    {
      text: "Country",
      name: "billing_country",
      placeholder: "Enter country name",
      value: customerObject.billing_country,
    },
  ];
  const shippingAddressFields = [
    {
      text: "Street name",
      name: "shipping_street",
      placeholder: "Enter street",
      value: isChecked
        ? customerObject.billing_street
        : customerObject.shipping_street,
    },
    {
      text: "Number",
      name: "shipping_number",
      placeholder: "Enter home number",
      value: isChecked
        ? customerObject.billing_number
        : customerObject.shipping_number,
    },

    {
      text: "Post code",
      name: "shipping_zipcode",
      placeholder: "Enter post code",
      value: isChecked
        ? customerObject.billing_zipcode
        : customerObject.shipping_zipcode,
    },
    {
      text: "City name",
      name: "shipping_city",
      placeholder: "Enter city name",
      value: isChecked
        ? customerObject.shipping_city
        : customerObject.shipping_city,
    },
    {
      text: "State",
      name: "shipping_state",
      placeholder: "Enter state name",
      value: isChecked
        ? customerObject.billing_state
        : customerObject.shipping_state,
    },
    {
      text: "Country",
      name: "shipping_country",
      placeholder: "Enter country name",
      value: isChecked
        ? customerObject.billing_country
        : customerObject.shipping_country,
    },
  ];

  useEffect(() => {
    if (id) {
      findOneUser();
    }
  }, [findOneUser, id]);

  return {
    handleSubmit,
    handleChange,
    setCustomerObject,
    billingAddressFields,
    isChecked,
    handleChecked,
    shippingAddressFields,
    personalData,
    phoneNumbers,
  };
}
