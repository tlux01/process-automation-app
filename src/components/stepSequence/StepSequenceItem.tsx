import { StepSequence } from "../../API";
import StepEditor from "../steps/StepEditor";

function StepSequenceItem(props: {
  stepSequence: StepSequence;
  last: boolean;
}) {
  return (
    <>
      <div className="flex">
        <div className="flex flex-column">
          <div className="flex justify-center align-middle m-2 w-10 h-10 bg-blue-600 rounded">
            <p className="text-white m-auto">{props.stepSequence.stepNumber}</p>
          </div>
          <div className="flex-grow flex justify-center">
            {props.last ? <></> : <div className=" bg-blue-600 w-1"></div>}
          </div>
        </div>
        <div className="flex-grow align-self-center h-48">
          <StepEditor step={props.stepSequence.step!} />
        </div>
      </div>
    </>
  );
}

export default StepSequenceItem;
