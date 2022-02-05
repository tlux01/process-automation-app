import { Card } from "react-bootstrap";
import { Step } from "../../viewModels/Step";

function StepViewer(props: { step: Step | null }) {
  if (props.step) {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{props?.step.name}</Card.Title>
            <div>
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
            </div>
            <Card.Text>{props?.step.sendEmail}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return <></>;
  }
}

export default StepViewer;
