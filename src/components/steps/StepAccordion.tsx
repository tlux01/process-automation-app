import { Accordion } from "react-bootstrap";
import { Step } from "../../API";
import TemplateListItem from "../templates/TemplateListItem";
function StepAccordion(props: { step: Step }) {
  return (
    <>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{props.step.name}</Accordion.Header>
          <Accordion.Body>
            <label className="me-2" htmlFor="scales">
              Send Email?
            </label>
            <input
              type="checkbox"
              className="form-check-input"
              name="sendEmailCheckbox"
              value="sendEmail"
              checked={props?.step.sendEmail}
              readOnly
            />
            <TemplateListItem template={props?.step.template!} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
export default StepAccordion;
