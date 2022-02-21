import { Template } from "../../API";

function TemplateListItem(props: { template: Template }) {
  return (
    <div className="mt-1 w-24 bg-white flex flex-col">
      <div>
        <span className="text-lg">{props.template.name}</span>
      </div>
      <div>
        <span className="text-sm text-gray-300">Created At: </span>
      </div>
    </div>
  );
}

export default TemplateListItem;
