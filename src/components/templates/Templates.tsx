import { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import AddTemplate from "./AddTemplate";
import SideNavDrawer from "../nav/SideNavDrawer";
import TemplateList from "./TemplateList";
import TemplateViewer from "./TemplateViewer";
import TemplateListItem from "../list/ListItem";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listTemplates } from "../../graphql/queries";
import API from "@aws-amplify/api";
import { Template } from "../../API";

function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  function selectedTemplateCallback(template: Template) {
    setSelectedTemplate(template);
  }

  const [templates, setTemplates] = useState<Template[] | null>(null);
  const isMountedRef = useRef<boolean | null>(null);

  async function getTemplates() {
    const templatesData = (await API.graphql(
      graphqlOperation(listTemplates)
    )) as { data: any };
    if (isMountedRef.current) {
      let templates: Template[] = templatesData.data.listTemplates.items;
      setTemplates(templates);
    }
  }

  useEffect(() => {
    isMountedRef.current = true;
    getTemplates();
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  const templateItem = templates ? (
    <TemplateListItem template={(templates as Template[])[0]} />
  ) : (
    <></>
  );
  return (
    <>
      <div className="flex mt-3">
        <div className="ms-2 flex flex-col">
          <div className="title-container">
            <h3 className="m-0">Templates</h3>
            <p className="text-xs">
              You currently have {templates?.length} templates
            </p>
          </div>
          {templateItem}
        </div>
      </div>
    </>
  );
}

export default Templates;
