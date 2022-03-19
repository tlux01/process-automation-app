import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useRef, useState } from "react";
import { Workflow } from "../../API";
import { customListWorkflows } from "../../graphql/customQueries";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddWorkflowButton from "./AddWorkflowButton";
import WorkflowListItem from "./WorkflowListItem";
import RefreshSpinner from "../shared/RefreshSpinner";
import WorkflowEditor from "./WorkflowEditor";
function Workflows() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(
    null
  );

  const [refreshing, setRefreshing] = useState<Boolean>(false);

  const [workflows, setWorkflows] = useState<Workflow[] | null>(null);
  const isMountedRef = useRef<boolean | null>(null);

  async function getWorkflows() {
    const workflowData = (await API.graphql(
      graphqlOperation(customListWorkflows)
    )) as { data: any };
    if (isMountedRef.current) {
      console.log(workflowData);
      let workflows: Workflow[] = workflowData.data.listWorkflows.items;
      setWorkflows(workflows);
    }
  }

  useEffect(() => {
    isMountedRef.current = true;

    refreshWorkflowList();
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  async function refreshWorkflowList() {
    setRefreshing(true);
    await getWorkflows();
    setRefreshing(false);
  }

  function selectWorkflow(e: any, workflow: Workflow) {
    setSelectedWorkflow(workflow);
  }

  const workflowItemList = workflows ? (
    workflows.map((workflow) => {
      return (
        <WorkflowListItem
          workflow={workflow}
          onPress={selectWorkflow}
          selected={
            selectedWorkflow ? selectedWorkflow.id === workflow.id : false
          }
        />
      );
    })
  ) : (
    <></>
  );

  const workflowEditor = selectedWorkflow ? (
    <WorkflowEditor workflow={selectedWorkflow} />
  ) : (
    <></>
  );
  return (
    <>
      <div className="ps-4 pt-3 flex flex-col max-h-screen h-full overflow-hidden">
        <div className="title-container">
          <div className="flex">
            <h3 className="m-0">Workflows</h3>
            <div className="my-auto">
              <RefreshIcon onClick={refreshWorkflowList} />
            </div>
          </div>
          {refreshing ? (
            <></>
          ) : (
            <p className="text-xs">
              You currently have {workflows?.length} Workflows
            </p>
          )}
        </div>
        <div className="flex flex-grow overflow-hidden">
          <div className="flex flex-col w-60 justify-between overflow-hidden">
            <div className="flex flex-col flex-grow overflow-y-scroll">
              {refreshing ? <RefreshSpinner /> : workflowItemList}
            </div>
            <div className="flex justify-end pb-2 pe-2 pt-2">
              <AddWorkflowButton />
            </div>
          </div>
          <div className="flex-grow">{workflowEditor}</div>
        </div>
      </div>
    </>
  );
}

export default Workflows;
