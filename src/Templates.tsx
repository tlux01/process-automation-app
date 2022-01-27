import { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import AddTemplate from "./AddTemplate"
import { Template} from "./interface/Template"
import Navigation from "./Navigation"
import TemplateList from "./TemplateList"
import TemplateViewer from "./TemplateViewer"

function Templates() {
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null)
    function selectedTemplateCallback(template:Template) {
        setSelectedTemplate(template)
    }
    return (
        <>
            <Navigation/>
            <Container fluid>
                <div className="mt-1">
                    <Row>
                        <Col>
                            <TemplateList selectedTemplateCallback={selectedTemplateCallback}/>
                        </Col>
                        <Col>
                            <TemplateViewer template={selectedTemplate}/>
                        </Col>
                    </Row>
                    <AddTemplate/>
                </div>

            </Container>
        </>
    )
}

export default Templates