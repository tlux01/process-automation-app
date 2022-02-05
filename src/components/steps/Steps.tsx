import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddStep from "./AddStep";
import Navigation from "../nav/Navigation";
import StepList from "./StepList";
import StepViewer from "./StepViewer";
import { Step } from "../../viewModels/Step";

function Steps() {
  const [selectedStep, setSelectedStep] = useState<Step | null>(null);
  function selectedStepCallback(step: Step) {
    setSelectedStep(step);
  }
  return (
    <>
      <Navigation />
      <Container fluid>
        <div className="mt-1">
          <Row>
            <Col>
              <div className="mb-1">
                <StepList selectedStepCallback={selectedStepCallback} />
              </div>
              <AddStep />
            </Col>
            <Col>
              <StepViewer step={selectedStep} />
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Steps;
