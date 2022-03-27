import { Template } from "../../API";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";

function TemplateEditor(props: { template: Template }) {
  const [value, setValue] = useState(props.template.template);

  useEffect(() => {
    setValue(props.template.template);
  }, [props.template.template]);

  function handleValueChange(template: string) {
    setValue(template);
  }
  return (
    <div className="p-3 mb-1 me-1 rounded-r-md rounded-b-md bg-white flex flex-col h-full">
      <div className="p-3 pt-1 shadow-lg rounded-md flex-grow flex flex-col">
        <div className="flex">
          <label className="m-0 text-2xl me-2">{props.template.name}</label>
        </div>
        <div className="flex-grow flex flex-col pt-3">
          <h6 className="m-0">Email Template:</h6>
          <ReactQuill
            theme="snow"
            value={value}
            onChange={(e) => handleValueChange(e)}
          />
        </div>
      </div>
    </div>
  );
}

export default TemplateEditor;
