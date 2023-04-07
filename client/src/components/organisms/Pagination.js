import { useContext } from "react";
import { Button } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";

function Pagination() {
  const { handleChangePage, currentPage, filteredCustomers, totalPageCount } =
    useContext(AppContext);
  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-700">
          {currentPage}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-700">
          10
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-700">
          {filteredCustomers.length}
        </span>{" "}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <Button
          disabled={currentPage === 1 ? true : false}
          className="inline-flex items-center disabled:opacity-25 disabled:cursor-not-allowed px-4"
          onClick={() => handleChangePage("prev")}
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
          Prev
        </Button>
        <Button
          disabled={currentPage === totalPageCount ? true : false}
          onClick={() => handleChangePage("next")}
          className="inline-flex items-center disabled:opacity-25 disabled:cursor-not-allowed px-4"
        >
          Next
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-2"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </Button>
      </div>
    </div>
  );
}

export default Pagination;
