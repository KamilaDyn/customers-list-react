import { Button } from "react-bootstrap";

function CustomButton({ children, variant }) {
  return <Button variant={variant}>{children}</Button>;
}

export default CustomButton;
