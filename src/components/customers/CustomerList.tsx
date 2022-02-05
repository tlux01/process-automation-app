import { useEffect, useRef, useState } from "react";
import { listCustomers } from "../../graphql/queries";
import { API, graphqlOperation } from "aws-amplify";
import ListGroup from "react-bootstrap/esm/ListGroup";

interface Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}
function CustomerList() {
  const [customers, setCustomers] = useState<Customer[] | null>(null);
  const isMountedRef = useRef<boolean | null>(null);

  async function getCustomers() {
    const customers = (await API.graphql(graphqlOperation(listCustomers))) as {
      data: any;
    };
    if (isMountedRef.current) {
      console.log(customers);
      setCustomers(customers.data.listCustomers.items);
    }
  }

  useEffect(() => {
    isMountedRef.current = true;
    getCustomers();
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  let customerItems = customers?.map((customer) => (
    <ListGroup.Item key={customer.id}>
      <div>
        <h6>
          {customer.firstName} {customer.lastName}
        </h6>
        <p>{customer.email}</p>
      </div>
    </ListGroup.Item>
  ));
  return (
    <div>
      <ListGroup>{customerItems}</ListGroup>
    </div>
  );
}

export default CustomerList;
