import { Template } from "../../API";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import { template } from "lodash";

function TemplateItem(props: { template: Template }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  const templateText = show ? (
    <div className="p-0 m-0 mt-2 place-content-center">
      <textarea readOnly className="border border-blue-500 rounded w-full h-60">
        {props.template.template}
      </textarea>
    </div>
  ) : (
    <></>
  );

  const expandButton = show ? (
    <KeyboardArrowUpIcon onClick={handleClose} />
  ) : (
    <KeyboardArrowDownIcon onClick={handleShow} />
  );
  return (
    <>
      <div className="flex flex-col w-72 border shadow-sm p-2 rounded">
        <div className="flex justify-between">
          <h6 className="m-auto">Template: {props.template.name}</h6>
          {expandButton}
        </div>
        {templateText}
      </div>
    </>
  );
}

export default TemplateItem;
