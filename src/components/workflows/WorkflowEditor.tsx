import { Step, StepSequence, Workflow } from "../../API";
import StepSequenceItem from "../stepSequence/StepSequenceItem";

function WorkflowEditor(props: { workflow: Workflow }) {
  const stepSequenceList = (props.workflow?.steps?.items as StepSequence[])
    .sort((a: StepSequence, b: StepSequence) => {
      if (a.stepNumber! > b.stepNumber!) {
        return 1;
      } else {
        return -1;
      }
    })
    .map((stepItem) => {
      return (
        <>
          <StepSequenceItem stepSequence={stepItem!} />
        </>
      );
    });
  return (
    <div className="p-3 mb-1 me-1 rounded-r-md rounded-b-md bg-white flex flex-col h-full">
      <div className="shadow-lg rounded-md flex-grow flex flex-col overflow-y-auto">
        <div className="flex-grow flex flex-col overflow-y-auto">
          <div className="flex flex-col bg-gray-100">
            <p className="m-0 me-2 text-sm font-thin">Workflow</p>
            <p className="relative font-medium -top-2 text-2xl m-0">
              {props.workflow.name}
            </p>
          </div>
          <div className="flex flex-grow flex-col overflow-y-auto">
            {stepSequenceList}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkflowEditor;
