import { useState } from "react";
import { Workflow } from "../../API";
import Navigation from "../nav/Navigation";
import AddWorkflow from "./AddWorkflow";
import WorkflowList from "./WorkflowList";
import WorkflowViewer from "./WorkflowViewer";

function Workflows() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(
    null
  );
  function selectedWorkflowCallback(workflow: Workflow) {
    setSelectedWorkflow(workflow);
  }
  return (
    <>
      <Navigation />
      <div className="row">
        <div className="col d-flex flex-column">
          <WorkflowList selectedWorkflowCallback={selectedWorkflowCallback} />
          <AddWorkflow />
        </div>
        <div className="col d-flex flex-column">
          <WorkflowViewer workflow={selectedWorkflow} />
        </div>
      </div>
    </>
  );
}

export default Workflows;
