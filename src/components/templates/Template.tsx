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
    <textarea>{props.template.template}</textarea>
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
      <div className="d-flex flex-column">
        <div className="d-flex">
          <h6 className="">{props.template.name}</h6>
          {expandButton}
        </div>
        <div>{templateText}</div>
      </div>
    </>
  );
}

export default TemplateItem;
