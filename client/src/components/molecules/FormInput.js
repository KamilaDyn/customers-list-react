import { Form } from "react-bootstrap";
import { Required } from "../atoms";

function FormInput({
  text,
  name,
  type,
  placeholder,
  required,
  onChange,
  value,
  disabled,
}) {
  return (
    <Form.Group className="mb-2" controlId="formBasicEmail">
      <Form.Label>
        {text}
        {required && <Required />}
      </Form.Label>
      <Form.Control
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        required={required || false}
        value={value || ""}
        disabled={disabled || false}
      />
    </Form.Group>
  );
}

export default FormInput;
