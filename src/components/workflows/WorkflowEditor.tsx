import { Workflow } from "../../API";
import StepSequenceItem from "../stepSequence/StepSequenceItem";

function WorkflowEditor(props: { workflow: Workflow }) {
  const stepSequenceList = props.workflow?.steps?.items.map((stepItem) => {
    return (
      <div>
        <StepSequenceItem stepSequence={stepItem!} />
      </div>
    );
  });
  return (
    <div className="p-3 mb-1 me-1 rounded-r-md rounded-b-md bg-white flex flex-col h-full">
      <div className="shadow-lg rounded-md flex-grow flex flex-col">
        <div className="flex-grow flex flex-col">
          <div className="flex flex-col bg-gray-100">
            <p className="m-0 me-2 text-sm font-thin">Workflow</p>
            <p className="relative font-medium -top-2 text-2xl m-0">
              {props.workflow.name}
            </p>
          </div>
          <div className="flex flex-col-reverse">{stepSequenceList}</div>
        </div>
      </div>
    </div>
  );
}

export default WorkflowEditor;
