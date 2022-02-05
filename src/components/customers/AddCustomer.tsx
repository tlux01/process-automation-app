import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Auth from "@aws-amplify/auth";
import { API, graphqlOperation } from "aws-amplify";
import { createCustomer } from "../../graphql/mutations";

interface CustomerInput {
  firstName: string;
  lastName: string;
  email: string;
}
function AddCustomer() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newCustomer, setNewCustomer] = useState<CustomerInput>({
    firstName: "",
    lastName: "",
    email: "",
  });
  const addCustomer = async () => {
    await API.graphql(
      graphqlOperation(createCustomer, { input: { ...newCustomer } })
    );
    handleClose();
  };

  const handleCustomerInput = (field: keyof CustomerInput, value: string) => {
    let c = newCustomer;
    c[field] = value;
    setNewCustomer(c);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Customer
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Customer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                onChange={(e) =>
                  handleCustomerInput("firstName", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                onChange={(e) =>
                  handleCustomerInput("lastName", e.target.value)
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                onChange={(e) => handleCustomerInput("email", e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            className="mt-1"
            onClick={addCustomer}
          >
            Add Customer
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddCustomer;
