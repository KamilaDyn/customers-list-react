import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function ButtonPrev() {
  const navigate = useNavigate();
  return (
    <Button
      className="mt-3 ml-4"
      variant="outline-dark"
      onClick={() => navigate("/")}
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5 mr-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Button>
  );
}

export default ButtonPrev;
