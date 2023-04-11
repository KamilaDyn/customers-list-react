import { Button } from "react-bootstrap";
function PaginationBtn({ children, disabled, onHandleClick, title }) {
  return (
    <Button
      disabled={disabled}
      onClick={onHandleClick}
      className="inline-flex items-center disabled:opacity-25 disabled:cursor-not-allowed px-4 mr-2"
    >
      {title}
      <svg
        aria-hidden="true"
        className="w-5 h-5 ml-2"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {children}
      </svg>
    </Button>
  );
}

export default PaginationBtn;
