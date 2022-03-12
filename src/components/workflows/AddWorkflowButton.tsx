import API, { graphqlOperation } from "@aws-amplify/api";
import { useState } from "react";
import { Workflow } from "../../viewModels/Workflow";
import { listSteps, listStepSequences } from "../../graphql/queries";
import { customListWorkflows } from "../../graphql/customQueries";
import { createStepSequence, createWorkflow } from "../../graphql/mutations";
import { Button, Form, Modal } from "react-bootstrap";
import { Step } from "../../viewModels/Step";
import AddIcon from "@mui/icons-material/Add";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import _ from "lodash";
import { CreateStepSequenceInput } from "../../API";
import {
  sequenceContainerStyle,
  sequenceNumberStyle,
} from "../../styles/sequenceStyles";

type WorkflowInput = {
  name: string;
};

type StepSequenceInput = {
  sequence: number;
  stepId: string;
};
function AddWorkflowButton() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    getWorkflows();
    setStepSequenceList([{ stepNumber: 1, stepSequenceStepId: "" }]);
    getSteps();
    setShow(true);
  };
  const [steps, setSteps] = useState<Step[] | null>(null);
  const [stepSequenceList, setStepSequenceList] = useState<
    CreateStepSequenceInput[]
  >([]);
  const [newWorkflow, setNewWorkflow] = useState<WorkflowInput>({
    name: "",
  });
  const [workflowList, setWorkflowList] = useState<Workflow[]>([]);

  const getWorkflows = async () => {
    const workflowData = (await API.graphql(
      graphqlOperation(customListWorkflows)
    )) as { data: any };
    console.log(workflowData);
  };

  const getSteps = async () => {
    const stepsData = (await API.graphql(graphqlOperation(listSteps))) as {
      data: any;
    };
    let steps = stepsData.data.listSteps.items;
    setSteps(steps);
    console.log(steps);
  };

  const addWorkflow = async () => {
    var newWorkflowId = (
      (await API.graphql(
        graphqlOperation(createWorkflow, { input: { ...newWorkflow } })
      )) as { data: any }
    ).data.createWorkflow.id;
    console.log(newWorkflowId);
    for (var stepSequence of stepSequenceList) {
      stepSequence.workflowStepsId = newWorkflowId;
      console.log("here");
      await API.graphql(
        graphqlOperation(createStepSequence, { input: { ...stepSequence } })
      );
    }
    console.log(await API.graphql(graphqlOperation(customListWorkflows)));
    console.log(await API.graphql(graphqlOperation(listStepSequences)));
  };

  const handleStepSequenceInput = (
    field: keyof StepSequenceInput,
    stepId: any,
    sequence: number
  ) => {
    var temp = _.cloneDeep(stepSequenceList);
    temp[sequence - 1].stepSequenceStepId = stepId;
    setStepSequenceList(temp);
  };

  const handleWorkflowInput = (field: keyof WorkflowInput, value: string) => {
    if (field === "name") {
      var c = newWorkflow;
      c[field] = value;
      setNewWorkflow(c);
      console.log(newWorkflow);
    }
  };

  const addStepSequence = () => {
    console.log(stepSequenceList);
    var nextStepSequence =
      stepSequenceList[stepSequenceList.length - 1].stepNumber! + 1;
    var temp = _.cloneDeep(stepSequenceList);
    temp.push({ stepSequenceStepId: "", stepNumber: nextStepSequence });
    setStepSequenceList(temp);
  };

  const moveStepSequenceUp = (currSeq: number) => {
    if (currSeq === 1) {
      return;
    }
    var temp = _.cloneDeep(stepSequenceList);
    //
    var newSequenceId = currSeq - 1;
    // minus 1 due to index starting at 0, swap sequences
    temp[currSeq - 1].stepNumber = newSequenceId;
    temp[currSeq - 2].stepNumber = currSeq;
    temp = _.sortBy(temp, [
      function (o) {
        return o.stepNumber;
      },
    ]);
    setStepSequenceList(temp);
  };

  const moveStepSequenceDown = (currSeq: number) => {
    if (currSeq === stepSequenceList.length) {
      return;
    }
    var temp = _.cloneDeep(stepSequenceList);
    //
    var newSequenceId = currSeq + 1;
    // minus 1 due to index starting at 0, swap sequences
    temp[currSeq - 1].stepNumber = newSequenceId;
    temp[currSeq].stepNumber = currSeq;
    temp = _.sortBy(temp, [
      function (o) {
        return o.stepNumber;
      },
    ]);
    setStepSequenceList(temp);
  };

  let stepSequenceControl = stepSequenceList?.map((stepSequence) => {
    return (
      <div className="d-flex align-items-center" key={stepSequence.stepNumber}>
        <div className="align-self-center me-2" style={sequenceContainerStyle}>
          <p style={sequenceNumberStyle}>{stepSequence.stepNumber}</p>
        </div>
        <div className="flex-fill">
          {stepSequence.stepSequenceStepId ? (
            <select
              key={stepSequence.stepNumber}
              value={stepSequence.stepSequenceStepId}
              className="form-select"
              onChange={(e) =>
                handleStepSequenceInput("sequence", e, stepSequence.stepNumber!)
              }
            >
              <option value="Select a step" disabled>
                Select a step
              </option>
              {steps?.map((step: Step) => (
                <option key={step.id} value={step.id}>
                  {step.name}
                </option>
              ))}
            </select>
          ) : (
            <select
              key={stepSequence.stepNumber}
              value="Select a step"
              className="form-select"
              onChange={(e) =>
                handleStepSequenceInput(
                  "stepId",
                  e.target.value,
                  stepSequence.stepNumber!
                )
              }
            >
              <option value="Select a step" disabled>
                Select a step
              </option>
              {steps?.map((step: Step) => (
                <option key={step.id} value={step.id}>
                  {step.name}
                </option>
              ))}
            </select>
          )}
        </div>
        <div>
          <ArrowDropUpIcon
            onClick={() => moveStepSequenceUp(stepSequence.stepNumber!)}
          />
          <ArrowDropDownIcon
            onClick={() => moveStepSequenceDown(stepSequence.stepNumber!)}
          />
        </div>
      </div>
    );
  });
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
                onChange={(e) => handleWorkflowInput("name", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Step</Form.Label>
              {stepSequenceControl}
            </Form.Group>

            <div className="d-flex flex-row-reverse">
              <AddIcon onClick={addStepSequence} />
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            className="mt-1"
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

export default AddWorkflowButton;
