import { Template } from "../../API";

function TemplateEditor(props: { template: Template }) {
  return (
    <div className="p-3 mb-1 me-1 rounded-r-md rounded-b-md bg-white flex flex-col h-full">
      <div className="p-3 pt-1 shadow-lg rounded-md flex-grow flex flex-col">
        <div className="flex">
          <label className="m-0 text-2xl me-2">{props.template.name}</label>
        </div>
        <div className="flex-grow flex flex-col pt-3">
          <h6 className="m-0">Email Template:</h6>
          <textarea
            id="texteditor"
            className="w-full flex-grow p-1 border-gray-400 border-1 rounded-md"
            readOnly
            value={props.template.template}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default TemplateEditor;
