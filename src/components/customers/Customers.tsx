import AddCustomer from "./AddCustomer";
import CustomerList from "./CustomerList";
import SideNavDrawer from "../nav/SideNavDrawer";

function Customers() {
  return (
    <>
      <CustomerList />
      <AddCustomer />
    </>
  );
}

export default Customers;
