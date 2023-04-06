import { FormTemplate } from "../components/templates";
import { useEditCustomer } from "../hooks/useEditCustomer";

function EditCustomerForm() {
  const {
    shippingAddressFields,
    billingAddressFields,
    personalData,
    phoneNumbers,
  } = useEditCustomer();
  return (
    <FormTemplate
      shippingAddressFields={shippingAddressFields}
      billingAddressFields={billingAddressFields}
      personalData={personalData}
      phoneNumbers={phoneNumbers}
    />
  );
}

export default EditCustomerForm;
