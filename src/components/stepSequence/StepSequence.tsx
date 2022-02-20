import { StepSequence } from "../../API";
import {
  sequenceContainerStyle,
  sequenceNumberStyle,
} from "../../styles/sequenceStyles";
import StepAccordion from "../steps/StepAccordion";

function StepSequenceItem(props: { stepSequence: StepSequence }) {
  return (
    <>
      <div className="d-flex">
        <div className="me-2" style={sequenceContainerStyle}>
          <p style={sequenceNumberStyle}>{props.stepSequence.stepNumber}</p>
        </div>
        <div className="align-self-center me-2">
          <StepAccordion step={props.stepSequence.step!} />
        </div>
      </div>
    </>
  );
}

export default StepSequenceItem;
