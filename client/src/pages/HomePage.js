import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, InputGroup, Form } from "react-bootstrap";
import { AppContext } from "../context/AppContext";
import { CustomeThead, SecondThead } from "../components/atoms";
import { CustomerItem } from "../components/molecules";
import { InfoComponent, Pagination } from "../components/organisms";
import { useButton } from "../hooks/useButton";
import { useDeleteItem } from "../hooks/useDeleteItem";

const HomePage = () => {
  const { handleSearch, currentTableData, filteredCustomers } =
    useContext(AppContext);
  const onDelete = useDeleteItem();

  const navigate = useNavigate();
  const printDiv = useButton();
  const customerItems =
    currentTableData &&
    currentTableData?.map((customer, i) => {
      return <CustomerItem key={customer._id} customer={customer} />;
    });
  return (
    <div className="min-w-full sm:px-2 md:px-8 lg:px-10 2xl:px-12 py-8">
      <div>
        <Button className="mr-2" onClick={() => navigate("/add")}>
          Add user
        </Button>
        <Button className="print-button" onClick={(e) => printDiv(e)}>
          Print column
        </Button>
      </div>
      <InputGroup className="max-w-xl mt-4">
        <InputGroup.Text id="search">
          <i className="fa fa-search" />
        </InputGroup.Text>
        <Form.Control
          placeholder="Search by last name"
          aria-label="Search"
          aria-describedby="search"
          onChange={handleSearch}
        />
      </InputGroup>
      <div className="flex flex-col mt-8">
        <div className="overflow-x-auto">
          <div className=" w-full inline-block align-middle">
            <div className="hidden lg:block ">
              {currentTableData?.length ? (
                <div>
                  <div
                    className="overflow-auto border rounded-lg shadow hidden lg:block"
                    id="print-page"
                  >
                    <table
                      id="table"
                      className="min-w-full border-b-2 divide-y divide-gray-700"
                    >
                      <thead className="bg-gray-700">
                        <tr className="details-row">
                          <CustomeThead colSpan="2">Name</CustomeThead>
                          <CustomeThead colSpan="2">Phone</CustomeThead>
                          <th
                            rowSpan="2"
                            className="px-3 py-3 text-xs text-white font-semibold tracking-wide text-center font-bold text-left text-gray-500 uppercase border-r border-b"
                          >
                            Email
                          </th>
                          <CustomeThead colSpan="5">
                            Billing Address
                          </CustomeThead>
                          <CustomeThead colSpan="5">
                            Delivery address
                          </CustomeThead>
                          <CustomeThead colSpan="2" noPrint="not-print">
                            Actions
                          </CustomeThead>
                        </tr>
                        <tr>
                          <SecondThead>First Name</SecondThead>
                          <SecondThead>Last Name</SecondThead>
                          <SecondThead>phone 1</SecondThead>
                          <SecondThead>phone 2</SecondThead>
                          <SecondThead>street</SecondThead>
                          <SecondThead>postcode</SecondThead>
                          <SecondThead>city</SecondThead>
                          <SecondThead>state</SecondThead>
                          <SecondThead>country</SecondThead>
                          <SecondThead>street</SecondThead>
                          <SecondThead>postcode</SecondThead>
                          <SecondThead>city</SecondThead>
                          <SecondThead>state</SecondThead>
                          <SecondThead>country</SecondThead>
                          <SecondThead noPrint="not-print">edit</SecondThead>
                          <SecondThead noPrint="not-print">delete</SecondThead>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-300 ">
                        {customerItems}
                      </tbody>
                    </table>
                  </div>
                  {filteredCustomers.length > 10 && <Pagination />}
                </div>
              ) : (
                <InfoComponent />
              )}
            </div>

            <div className="grid grid-ols-1 gap-4 lg:hidden">
              <>
                {currentTableData?.length ? (
                  <>
                    {currentTableData.map((customer) => (
                      <div
                        key={customer._id}
                        className="bg-white space-y-3 p-4 rounded-lg shadow m-2 sm:flex justify-between	"
                      >
                        <div>
                          <div className="sm:flex items-center space-x-2 text-sm">
                            <div className="py-1 text-blue-500 font-bold">
                              {customer.first_name} {customer.second_name}
                            </div>
                            <div className="py-1 text-gray-500">
                              <span className="font-bold"> Mail: </span>
                              {customer.email}
                            </div>
                            <div className="py-1 text-gray-500">
                              <span className="font-bold"> Phone: </span>
                              {customer.mobile_phone}{" "}
                              {customer.work_phone &&
                                `/  ${customer.work_phone}`}
                            </div>
                          </div>
                          <div className="py-2 flex items-center space-x-2 text-sm">
                            <div className="text-md font-bold">
                              Billing Address:
                            </div>
                            <div>
                              {customer.billing_street} street,{" "}
                              {customer.billing_postcode}{" "}
                              {customer.billing_city}, {customer.billing_state}{" "}
                              {customer.billing_country}
                            </div>
                          </div>
                          <div className="py-2 flex items-center space-x-2 text-sm">
                            <div className="text-md font-bold">
                              Shipping Address:
                            </div>
                            <div>
                              {customer.shipping_street} street,{" "}
                              {customer.shipping_postcode}{" "}
                              {customer.shipping_city},{" "}
                              {customer.shipping_state}{" "}
                              {customer.shipping_country}
                            </div>
                          </div>
                        </div>
                        <div>
                          <Button
                            className="mr-2"
                            variant="success"
                            onClick={() => navigate(`edit/${customer._id}`)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="danger"
                            onClick={onDelete.bind(this, customer._id)}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                    {filteredCustomers.length > 10 && <Pagination />}{" "}
                  </>
                ) : (
                  <InfoComponent />
                )}
              </>
            </div>
          </div>
        </div>
      </div>
      {/* <Spinner animation="border" role="status" className="sm:hidden" /> */}
    </div>
  );
};

export default HomePage;
