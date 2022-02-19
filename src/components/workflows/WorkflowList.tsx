import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useRef, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { Workflow } from "../../API";
import { customListWorkflows } from "../../graphql/customQueries";

function WorkflowList(props: { selectedWorkflowCallback: Function }) {
  const [workflows, setWorkflows] = useState<Workflow[] | null>(null);
  const [selectedWorkflow, setSelectedWorkflow] = useState("");
  const isMountedRef = useRef<boolean | null>(null);

  function handleClick(e: any, workflow: Workflow) {
    setSelectedWorkflow(workflow.id);
    props.selectedWorkflowCallback(workflow);
  }

  async function getTemplates() {
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
    getTemplates();
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  let workflowItems = workflows?.map((workflow) => (
    <ListGroup.Item
      active={workflow.id === selectedWorkflow}
      key={workflow.id}
      onClick={(e) => handleClick(e, workflow)}
    >
      <div>
        <h6>{workflow.name}</h6>
      </div>
    </ListGroup.Item>
  ));
  return (
    <>
      <div>
        <ListGroup>{workflowItems}</ListGroup>
      </div>
    </>
  );
}

export default WorkflowList;
