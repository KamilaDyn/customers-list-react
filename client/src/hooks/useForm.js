import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export function useForm() {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [customerObject, setCustomerObject] = useState({
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
  });

  const { id } = useParams();

  function findOne() {
    axios
      .get(`http://localhost:5000/api/customers/${id}`)
      .then((response) => {
        const {
          _id,
          first_name,
          second_name,
          mobile_phone,
          work_phone,
          email,
          billing_street,
          shipping_country,
          shipping_zipcode,
          billing_city,
          billing_zipcode,
          shipping_city,
          billing_number,
          billing_state,
          billing_country,
          shipping_state,
          shipping_number,
          shipping_street,
        } = response.data;
        setCustomerObject({
          _id: _id,
          first_name: first_name,
          second_name: second_name,
          email: email,
          mobile_phone: mobile_phone,
          work_phone: work_phone,
          shipping_street: shipping_street,
          shipping_number: shipping_number,
          shipping_zipcode: shipping_zipcode,
          shipping_city: shipping_city,
          shipping_state: shipping_state,
          shipping_country: shipping_country,
          billing_street: billing_street,
          billing_number: billing_number,
          billing_zipcode: billing_zipcode,
          billing_city: billing_city,
          billing_state: billing_state,
          billing_country: billing_country,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function addCustomer(newCustomer) {
    axios
      .request({
        method: "post",
        url: "http://localhost:5000/api/customers",
        data: newCustomer,
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/");
        } else {
          console.warn(response.status.code);
        }
      })
      //   .then(response => this.props.history.push("/"))

      .catch((err) => console.log(err));
  }
  function editCustomer(newCustomer) {
    axios
      .request({
        method: "put",
        url: `http://localhost:5000/api/customers/${id}`,
        data: newCustomer,
      })
      .then((response) => console.log(response))
      // .then(repsonse => this.props.history.push("/"))
      .catch((error) => console.log(error));
  }
  function handleChecked(e) {
    setIsChecked(e.target.checked);
    if (e.target.checked) {
      setCustomerObject((prevValue) => {
        return {
          ...prevValue,
          shipping_street: prevValue.billing_street,
          shipping_number: prevValue.billing_number,
          shipping_zipcode: prevValue.billing_zipcode,
          shipping_city: prevValue.billing_city,
          shipping_state: prevValue.billing_state,
          shipping_country: prevValue.billing_country,
        };
      });
    } else {
      setCustomerObject((prevValue) => {
        return {
          ...prevValue,
          shipping_street: prevValue.shipping_street,
          shipping_number: prevValue.shipping_number,
          shipping_zipcode: prevValue.shipping_zipcode,
          shipping_city: prevValue.shipping_city,
          shipping_state: prevValue.shipping_state,
          shipping_country: prevValue.shipping_country,
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
      if (id) {
        console.log("update");
        editCustomer(customerObject);
      } else {
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
    },
    {
      text: "Second work phone",
      name: "work_phone",
      placeholder: "Enter work number phone",
      value: customerObject.work_phone,
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
        ? customerObject.shipping_street
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
      findOne();
    }
  }, []);

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
