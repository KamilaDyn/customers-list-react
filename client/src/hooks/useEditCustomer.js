import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useForm} from './useForm';
import axios from 'axios';
import {baseUrl} from '../config';

export function useEditCustomer() {
  const [singleCustomer, setSingleCustomer] = useState({
    first_name: '',
    mobile_phone: '',
    second_name: '',
    email: '',
    work_phone: '',
    billing_street: '',
    billing_number: '',
    billing_zipcode: '',
    billing_city: '',
    billing_state: '',
    billing_country: '',
    shipping_street: '',
    shipping_number: '',
    shipping_zipcode: '',
    shipping_city: '',
    shipping_state: '',
    shipping_country: '',
  });
  const {isChecked} = useForm();
  const {id} = useParams();

  function findOne() {
    axios
      .get(`${baseUrl}/api/customers/${id}`)
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
        setSingleCustomer({
          _id: _id,
          first_name: first_name,
          last_name: second_name,
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

  const personalData = [
    {
      text: 'First name',
      name: 'first_name',
      placeholder: 'Enter first name',
      value: singleCustomer.first_name || '',
    },
    {
      text: 'Last Name',
      name: 'second_name',
      placeholder: 'Enter last name',
      value: singleCustomer.last_name || '',
    },
    {
      text: 'Email',
      name: 'email',
      placeholder: 'Enter email',
      value: singleCustomer.email || '',
      type: 'email',
    },
  ];
  const phoneNumbers = [
    {
      text: 'Mobile phone',
      name: 'mobile_phone',
      placeholder: 'Enter mobile number phone',
      value: singleCustomer.mobile_phone || '',
    },
    {
      text: 'Second work phone',
      name: 'work_phone',
      placeholder: 'Enter work number phone',
      value: singleCustomer.work_phone || '',
    },
  ];
  const billingAddressFields = [
    {
      text: 'Street name',
      name: 'billing_street',
      placeholder: 'Enter street',
      value: singleCustomer.billing_street || '',
    },
    {
      text: 'Number',
      name: 'billing_number',
      placeholder: 'Enter home number',

      value: singleCustomer.billing_number || '',
    },
    {
      text: 'Post code',
      name: 'billing_zipcode',
      placeholder: 'Enter post code',
      value: singleCustomer.billing_zipcode || '',
    },
    {
      text: 'City name',
      name: 'billing_city',
      placeholder: 'Enter city name',
      value: singleCustomer.billing_city || '',
    },
    {
      text: 'State',
      name: 'billing_state',
      placeholder: 'Enter state name',
      value: singleCustomer.billing_state || '',
    },
    {
      text: 'Country',
      name: 'billing_country',
      placeholder: 'Enter country name',
      value: singleCustomer.billing_country || '',
    },
  ];
  const shippingAddressFields = [
    {
      text: 'Street name',
      name: 'shipping_street',
      placeholder: 'Enter street',
      value: isChecked
        ? singleCustomer.billing_street || ''
        : singleCustomer.shipping_street || '',
    },
    {
      text: 'Number',
      name: 'shipping_number',
      placeholder: 'Enter home number',
      value: isChecked
        ? singleCustomer.billing_number || ''
        : singleCustomer.shipping_number || '',
    },

    {
      text: 'Post code',
      name: 'shipping_zipcode',
      placeholder: 'Enter post code',
      value: isChecked
        ? singleCustomer.billing_zipcode || ''
        : singleCustomer.shipping_zipcode || '',
    },
    {
      text: 'City name',
      name: 'shipping_city',
      placeholder: 'Enter city name',
      value: isChecked
        ? singleCustomer.shipping_city || ''
        : singleCustomer.shipping_city || '',
    },
    {
      text: 'State',
      name: 'shipping_state',
      placeholder: 'Enter state name',
      value: isChecked
        ? singleCustomer.billing_state || ''
        : singleCustomer.shipping_state || '',
    },
    {
      text: 'Country',
      name: 'shipping_country',
      placeholder: 'Enter country name',
      value: isChecked
        ? singleCustomer.billing_country || ''
        : singleCustomer.shipping_country || '',
    },
  ];
  console.log(singleCustomer.billing_state);

  useEffect(() => {
    findOne();
  }, []);
  return {
    singleCustomer,
    billingAddressFields,
    shippingAddressFields,
    personalData,
    phoneNumbers,
  };
}
