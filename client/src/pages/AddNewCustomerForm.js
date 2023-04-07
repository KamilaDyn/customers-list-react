import { useForm } from "../hooks/useForm";
import { FormTemplate } from "../components/templates";

function AddNewCustomerForm() {
  const {
    billingAddressFields,
    shippingAddressFields,
    personalData,
    phoneNumbers,
    handleChange,
    isChecked,
    handleChecked,
    handleSubmit,
  } = useForm();

  return (
    <FormTemplate
      shippingAddressFields={shippingAddressFields}
      billingAddressFields={billingAddressFields}
      personalData={personalData}
      phoneNumbers={phoneNumbers}
      onChange={handleChange}
      isChecked={isChecked}
      handleChecked={handleChecked}
      onSubmit={handleSubmit}
    />
  );
}

export default AddNewCustomerForm;
