import { Card } from "react-bootstrap";
import { Template } from "../../API";

function TemplateViewer(props: { template: Template | null }) {
  if (props.template) {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>{props?.template.name}</Card.Title>
            <Card.Text>{props?.template.template}</Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  } else {
    return <></>;
  }
}

export default TemplateViewer;
