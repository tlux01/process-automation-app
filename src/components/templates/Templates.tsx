import { useEffect, useRef, useState } from "react";
import TemplateListItem from "./TemplateListItem";
import { graphqlOperation } from "@aws-amplify/api-graphql";
import { listTemplates } from "../../graphql/queries";
import API from "@aws-amplify/api";
import { Template } from "../../API";
import TemplateEditor from "./TemplateEditor";
import AddTemplateButon from "./AddTemplateButton";
import RefreshIcon from "@mui/icons-material/Refresh";

function Templates() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );

  const [loadingTemplateList, setLoadingTemplateList] =
    useState<Boolean>(false);
  const [refreshing, setRefreshing] = useState<Boolean>(false);

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

    initLoad();
    return () => {
      isMountedRef.current = false;
    };
  }, []);

  function selectTemplate(e: any, template: Template) {
    setSelectedTemplate(template);
  }

  async function initLoad() {
    setRefreshing(true);
    await getTemplates();
    setRefreshing(false);
  }
  const templateItemList = templates ? (
    templates.map((template) => {
      return (
        <TemplateListItem
          template={template}
          selected={
            selectedTemplate ? template.id == selectedTemplate.id : false
          }
          onPress={selectTemplate}
          key={template.id}
        />
      );
    })
  ) : (
    <></>
  );

  const templateEditor = selectedTemplate ? (
    <TemplateEditor template={selectedTemplate} />
  ) : (
    <></>
  );

  const refreshIcon = (
    <div className="flex items-center justify-content-center">
      <div
        className="spinner-grow text-gray-400 spinner-grow-sm me-1"
        role="status"
      ></div>
      <p className="m-0">Loading... </p>
    </div>
  );

  async function refreshTemplateList() {
    setRefreshing(true);
    await getTemplates();
    setRefreshing(false);
  }
  return (
    <>
      <div className="ps-4 pt-3 flex flex-col max-h-screen h-full overflow-hidden">
        <div className="title-container">
          <div className="flex">
            <h3 className="m-0">Templates</h3>
            <div className="my-auto">
              <RefreshIcon onClick={refreshTemplateList} />
            </div>
          </div>
          {refreshing ? (
            <></>
          ) : (
            <p className="text-xs">
              You currently have {templates?.length} templates
            </p>
          )}
        </div>
        <div className="flex flex-grow overflow-hidden">
          <div className="flex flex-col w-60 justify-between overflow-hidden">
            <div className="flex flex-col flex-grow overflow-scroll">
              {refreshing ? refreshIcon : templateItemList}
            </div>
            <div className="flex justify-end pb-2 pe-2 pt-2">
              <AddTemplateButon />
            </div>
          </div>
          <div className="flex-grow">{templateEditor}</div>
        </div>
      </div>
    </>
  );
}

export default Templates;
