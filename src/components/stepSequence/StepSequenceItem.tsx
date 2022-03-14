import { StepSequence } from "../../API";
import {
  sequenceContainerStyle,
  sequenceNumberStyle,
} from "../../styles/sequenceStyles";
import StepAccordion from "../steps/StepAccordion";
import StepEditor from "../steps/StepEditor";

function StepSequenceItem(props: { stepSequence: StepSequence }) {
  return (
    <>
      <div className="flex">
        <div className="flex justify-center align-middle m-2 w-10 h-10 bg-blue-600 rounded">
          <p className="text-white m-auto">{props.stepSequence.stepNumber}</p>
        </div>
        <div className="flex-grow align-self-center me-2 h-48">
          <StepEditor step={props.stepSequence.step!} />
        </div>
      </div>
    </>
  );
}

export default StepSequenceItem;
