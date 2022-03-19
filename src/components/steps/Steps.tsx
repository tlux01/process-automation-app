import { API, graphqlOperation } from "aws-amplify";
import { useCallback, useEffect, useRef, useState } from "react";
import { Step } from "../../API";
import { listSteps } from "../../graphql/queries";
import StepListItem from "./StepListItem";
import RefreshIcon from "@mui/icons-material/Refresh";
import RefreshSpinner from "../shared/RefreshSpinner";
import AddStepButton from "./AddStepButton";
import StepEditor from "./StepEditor";

function Steps() {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);
  const [refreshing, setRefreshing] = useState<Boolean>(false);
  const [steps, setSteps] = useState<Step[] | null>(null);
  const isMountedRef = useRef<boolean | null>(null);

  async function getSteps() {
    const stepsData = (await API.graphql(graphqlOperation(listSteps))) as {
      data: any;
    };
    if (isMountedRef.current) {
      let steps = stepsData.data.listSteps.items;
      setSteps(steps);
    }
  }

  const refreshSteps = useCallback(async () => {
    setRefreshing(true);
    await getSteps();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    refreshSteps();
    return () => {
      isMountedRef.current = false;
    };
  }, [refreshSteps]);

  function selectStep(e: any, step: Step) {
    setSelectedStep(step);
  }
  const stepItemList = steps ? (
    steps.map((step) => {
      return (
        <StepListItem
          step={step}
          onPress={selectStep}
          selected={selectedStep ? selectedStep.id === step.id : false}
        />
      );
    })
  ) : (
    <></>
  );
  const stepEditor = selectedStep ? <StepEditor step={selectedStep} /> : <></>;

  return (
    <>
      <div className="ps-4 pt-3 flex flex-col max-h-screen h-full overflow-hidden">
        <div className="title-container">
          <div className="flex">
            <h3 className="m-0">Steps</h3>
            <div className="my-auto">
              <RefreshIcon onClick={refreshSteps} />
            </div>
          </div>
          {refreshing ? (
            <></>
          ) : (
            <p className="text-xs">You currently have {steps?.length} steps</p>
          )}
        </div>
        <div className="flex flex-grow overflow-hidden">
          <div className="flex flex-col w-60 justify-between overflow-hidden">
            <div className="flex flex-col flex-grow overflow-y-scroll">
              {refreshing ? <RefreshSpinner /> : stepItemList}
            </div>
            <div className="flex justify-end pb-2 pe-2 pt-2">
              <AddStepButton />
            </div>
          </div>
          <div className="flex-grow">{stepEditor}</div>
        </div>
      </div>
    </>
  );
}

export default Steps;
