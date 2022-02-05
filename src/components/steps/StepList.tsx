import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { useState, useRef, useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { listSteps } from "../../graphql/queries";
import { Step } from "../../viewModels/Step";

function StepList(props: { selectedStepCallback: Function }) {
  const [steps, setSteps] = useState<Step[] | null>(null);
  const [selectedStep, setSelectedStep] = useState("");
  const isMountedRef = useRef<boolean | null>(null);

  async function getSteps() {
    const stepsData = (await API.graphql(graphqlOperation(listSteps))) as {
      data: any;
    };
    if (isMountedRef.current) {
      let steps = stepsData.data.listSteps.items;
      setSteps(steps);
      console.log(steps);
    }
  }

  function handleClick(e: any, step: Step) {
    setSelectedStep(step.id);
    props.selectedStepCallback(step);
  }

  useEffect(() => {
    isMountedRef.current = true;
    getSteps();
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  let stepItems = steps?.map((step) => (
    <ListGroup.Item
      active={step.id === selectedStep}
      key={step.id}
      onClick={(e) => handleClick(e, step)}
    >
      <div>
        <h6>{step.name}</h6>
      </div>
    </ListGroup.Item>
  ));
  return (
    <>
      <div>
        <ListGroup>{stepItems}</ListGroup>
      </div>
    </>
  );
}

export default StepList;
