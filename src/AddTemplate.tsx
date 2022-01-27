import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Auth from "@aws-amplify/auth";
import { API, graphqlOperation } from "aws-amplify";
import { createTemplate } from "./graphql/mutations";

interface TemplateInput {
  name: string;
  template: string;
}

function AddTemplate() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [newTemplate, setNewTemplate] = useState<TemplateInput>({
    name: "",
    template: "",
  });
  const addCustomer = async () => {
    await API.graphql(
      graphqlOperation(createTemplate, { input: { ...newTemplate } })
    );
    handleClose();
  };

  const handleTemplateInput = (field: keyof TemplateInput, value: string) => {
    let t = newTemplate;
    t[field] = value;
    setNewTemplate(t);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Template
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Template</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>Template Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Template Name"
                onChange={(e) => handleTemplateInput("name", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>Template</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                type="text"
                onChange={(e) =>
                  handleTemplateInput("template", e.target.value)
                }
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
            Add Template
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTemplate;