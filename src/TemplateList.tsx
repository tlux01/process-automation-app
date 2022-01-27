import API from "@aws-amplify/api";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { useEffect, useRef, useState } from "react";
import { Col, ListGroup, Row } from "react-bootstrap";
import { listTemplates } from "./graphql/queries";
import { Template } from "./interface/Template";


function TemplateList(props: { selectedTemplateCallback: Function }) {
    const [templates, setTemplates] = useState<Template[] | null>(null)
    const [selectedTemplate, setSelectedTemplate] = useState("")
    const isMountedRef = useRef<boolean | null>(null);


    async function getTemplates() {
        const templatesData = await API.graphql(graphqlOperation(listTemplates)) as { data: any }
        if (isMountedRef.current) {
            let templates: Template[] = templatesData.data.listTemplates.items
            setTemplates(templates)
        }
    }
    function handleClick(e: any, template: Template) {
        setSelectedTemplate(template.id)
        props.selectedTemplateCallback(template)
    }

    useEffect(
        () => {
            isMountedRef.current = true;
            getTemplates();
            return () => { isMountedRef.current = false; }
        },
        []
    )

    let templateItems = templates?.map((template) =>
        <ListGroup.Item active={template.id === selectedTemplate} key={template.id} onClick={((e) => handleClick(e, template))}>
            <div>
                <h6>{template.name}</h6>

            </div>
        </ListGroup.Item>)
    return (
        <>
            <div>
                <ListGroup>
                    {templateItems}
                </ListGroup>
            </div>
        </>
    )
}

export default TemplateList