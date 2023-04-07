import { FormTemplate } from "../components/templates";
import { useForm } from "../hooks/useForm";

function EditCustomerForm() {
  const {
    shippingAddressFields,
    billingAddressFields,
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

export default EditCustomerForm;
