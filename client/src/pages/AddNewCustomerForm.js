import { useForm } from "../hooks/useForm";

import { FormTemplate } from "../components/templates";

function AddNewCustomerForm() {
  const { addressFields, shippingAddressFields, personalData, phoneNumbers } =
    useForm();

  return (
    <FormTemplate
      shippingAddressFields={shippingAddressFields}
      billingAddressFields={addressFields}
      personalData={personalData}
      phoneNumbers={phoneNumbers}
    />
  );
}

export default AddNewCustomerForm;
