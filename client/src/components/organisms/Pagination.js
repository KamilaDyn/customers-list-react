import { useContext } from "react";
import { Form } from "react-bootstrap";
import { AppContext } from "../../context/AppContext";
import { PaginationBtn } from "../atoms";

function Pagination() {
  const {
    handleChangePage,
    currentPage,
    filteredCustomers,
    totalPageCount,
    pageSize,
    setPageSize,
  } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center mt-2">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-700">
          {currentPage}
        </span>{" "}
        to{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-700">
          {pageSize}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-gray-700">
          {filteredCustomers.length}
        </span>{" "}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <PaginationBtn
          title="Prev"
          disabled={currentPage === 1 ? true : false}
          onHandleClick={() => handleChangePage("prev")}
        >
          <path
            fillRule="evenodd"
            d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          ></path>
        </PaginationBtn>

        <PaginationBtn
          title={"Next"}
          disabled={currentPage === totalPageCount ? true : false}
          onHandleClick={() => handleChangePage("next")}
        >
          <path
            fillRule="evenodd"
            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </PaginationBtn>
        <Form.Select
          aria-label="Select page size"
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          <option value="10">10</option>
          {filteredCustomers.length >= 10 && <option value="20">20</option>}
          {filteredCustomers.length >= 20 && <option value="30">30</option>}
          {filteredCustomers.length >= 30 && <option value="50">50</option>}
        </Form.Select>
      </div>
    </div>
  );
}

export default Pagination;
