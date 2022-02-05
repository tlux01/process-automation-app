import AddCustomer from "./AddCustomer";
import CustomerList from "./CustomerList";
import Navigation from "../nav/Navigation";

function Customers() {
  return (
    <>
      <Navigation />
      <CustomerList />
      <AddCustomer />
    </>
  );
}

export default Customers;
