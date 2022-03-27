import { Step } from "../../API";

function StepEditor(props: { step: Step }) {
  return (
    <div className="rounded bg-white flex flex-col h-full">
      <div className="flex"></div>

      <div className="flex-grow flex flex-col">
        <div className="p-2 rounded flex flex-col bg-gray-100">
          <p className="m-0 me-2 text-sm font-thin">Step</p>
          <p className="relative font-medium -top-2 text-2xl m-0">
            {props.step.name}
          </p>
        </div>
        <div className="p-2">
          <div>
            <p>{props.step.description ? props.step.description : ""}</p>
          </div>
          {props.step.template ? (
            <div className="flex">
              <p className="p-1 m-auto font-bold">Template:</p>
              <p className="m-0 p-1 flex-grow  rounded border-gray-100 border">
                {props.step.template.name}
              </p>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
export default StepEditor;
