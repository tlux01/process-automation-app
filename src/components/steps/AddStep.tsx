import { API, graphqlOperation } from "aws-amplify";
import { stringify } from "querystring";
import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { createStep } from "../../graphql/mutations";
import { listTemplates } from "../../graphql/queries";
import { Template } from "../../viewModels/Template";

interface StepInput {
  name: string;
  sendEmail: boolean;
  stepTemplateId: string | null;
}
function AddStep() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    getTemplates();
    setShow(true);
  };

  const [newStep, setNewStep] = useState<StepInput>({
    name: "",
    sendEmail: false,
    stepTemplateId: null,
  });
  const [showTemplateSelector, setShowTemplateSelector] =
    useState<Boolean>(false);
  const [templateList, setTemplateList] = useState<Template[]>([]);

  const addStep = async () => {
    await API.graphql(graphqlOperation(createStep, { input: { ...newStep } }));
    handleClose();
  };

  const getTemplates = async () => {
    const templatesData = (await API.graphql(
      graphqlOperation(listTemplates)
    )) as { data: any };
    setTemplateList(templatesData.data.listTemplates.items);
    console.log(templateList);
  };
  const handleStepInput = (field: keyof StepInput, value: any) => {
    let c = newStep;
    console.log(value);
    if (field === "sendEmail") {
      c[field] = Boolean(value);
      setShowTemplateSelector(c[field]);
    } else if (field === "stepTemplateId") {
      var selectedTemplate = templateList.filter((template) => {
        return template.id === value;
      })[0];
      console.log(selectedTemplate);
      c[field] = selectedTemplate.id;
    } else {
      c[field] = value;
    }
    setNewStep(c);
    console.log(newStep);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Step
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Step</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Step Name"
                onChange={(e) => handleStepInput("name", e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Will this Step Require Sending an Email?</Form.Label>
              <Form.Check
                type="checkbox"
                id="disabledFieldsetCheck"
                label="Email Required"
                onChange={(e) => handleStepInput("sendEmail", e.target.checked)}
              />
            </Form.Group>
            {showTemplateSelector ? (
              <Form.Group className="mb-3">
                <Form.Label>Template</Form.Label>
                <select
                  defaultValue="Select a template"
                  className="form-select"
                  onChange={(e) =>
                    handleStepInput("stepTemplateId", e.target.value)
                  }
                >
                  <option value="Select a template" disabled>
                    Select a template
                  </option>
                  {templateList?.map((template: Template) => (
                    <option key={template.id} value={template.id}>
                      {template.name}
                    </option>
                  ))}
                </select>
              </Form.Group>
            ) : (
              <></>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            className="mt-1"
            onClick={addStep}
          >
            Add Step
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddStep;
