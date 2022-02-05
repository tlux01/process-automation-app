import API, { graphqlOperation } from "@aws-amplify/api";
import { useState } from "react";
import { Workflow } from "../../viewModels/Workflow";
import { listWorkflows } from "../../graphql/queries";
import { createWorkflow } from "../../graphql/mutations";
import { Button, Form, Modal } from "react-bootstrap";

type WorkflowInput = {
  name: string;
};
function AddWorkflow() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    getWorkflows();
    setShow(true);
  };
  const [newWorkflow, setNewWorkflow] = useState<WorkflowInput>({
    name: "",
  });
  const [workflowList, setWorkflowList] = useState<Workflow[]>([]);
  const getWorkflows = async () => {
    const workflowData = (await API.graphql(
      graphqlOperation(listWorkflows)
    )) as { data: any };
  };

  const addWorkflow = async () => {
    await API.graphql(
      graphqlOperation(createWorkflow, { input: { ...newWorkflow } })
    );
  };

  const handleStepInput = (field: keyof WorkflowInput, value: any) => {
    let c = newWorkflow;
    c[field] = value;
    setNewWorkflow(c);
    console.log(newWorkflow);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Workflow
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Workflow</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Workflow Name"
                onChange={(e) => handleStepInput("name", e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            className="mt-1"
            disabled
            onClick={addWorkflow}
          >
            Add Workflow
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddWorkflow;
