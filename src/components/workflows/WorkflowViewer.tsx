import { Card } from "react-bootstrap";
import { Workflow } from "../../API";
import StepSequenceItem from "../stepSequence/StepSequenceItem";

function WorkflowViewer(props: { workflow: Workflow | null }) {
  console.log(props.workflow?.steps?.items);
  const stepSequenceView = props.workflow?.steps?.items.map((stepItem) => {
    return (
      <div>
        <StepSequenceItem stepSequence={stepItem!} />
      </div>
    );
  });
  console.log(stepSequenceView);
  return props.workflow ? (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{props?.workflow.name}</Card.Title>
          <div className="d-flex flex-column-reverse">{stepSequenceView}</div>
        </Card.Body>
      </Card>
    </>
  ) : (
    <></>
  );
}

export default WorkflowViewer;
