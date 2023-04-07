import { Form, Button } from "react-bootstrap";

import { FormInput } from "../molecules";

function FormTemplate({
  shippingAddressFields,
  billingAddressFields,
  personalData,
  phoneNumbers,
  onChange,
  isChecked,
  handleChecked,
  onSubmit,
}) {
  return (
    <div className="w-full  h-screen py-20 px-6 md:px-16 flex justify-center items-center">
      <Form className="flex-1 max-w-7xl" onSubmit={(e) => onSubmit(e)}>
        <div className="grid md:grid-cols-2 gap-4 ">
          <div>
            <div className="text-sky-700 text-2xl py-4 md:py-4">
              Personal data
            </div>
            {personalData.map(({ name, text, placeholder, value, type }) => (
              <FormInput
                key={name}
                text={text}
                name={name}
                type={type || "text"}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
              />
            ))}
          </div>
          <div>
            <div className="text-sky-700 text-2xl py-4 md:py-4">
              Phone numbers
            </div>
            {phoneNumbers.map(({ text, name, placeholder, value }) => (
              <FormInput
                key={name}
                text={text}
                name={name}
                type="text"
                placeholder={placeholder}
                onChange={onChange}
                value={value}
              />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <div className="text-sky-700 text-2xl py-4 md:py-4">
              Billing Address
            </div>
            <div className="grid md:grid-cols-2 gap-2">
              {billingAddressFields.map(
                ({ text, name, placeholder, value }) => (
                  <FormInput
                    key={name}
                    text={text}
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                  />
                )
              )}
            </div>
          </div>
          <div>
            <div className="text-sky-700 text-2xl py-4 md:py-4">
              Shipping Address
            </div>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Check me out"
                onChange={(e) => handleChecked(e)}
              />
            </Form.Group>
            <div className="grid md:grid-cols-2 gap-2">
              {shippingAddressFields.map(
                ({ text, name, placeholder, value }) => (
                  <FormInput
                    key={name}
                    text={text}
                    name={name}
                    type="text"
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    disabled={isChecked}
                  />
                )
              )}
            </div>
          </div>
        </div>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormTemplate;
