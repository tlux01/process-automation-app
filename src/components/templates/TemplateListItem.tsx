import { Template } from "../../API";

function TemplateListItem(props: {
  template: Template;
  selected: boolean;
  onPress: Function;
}) {
  const inactiveListStyle =
    "mb-2 me-2 p-3 rounded-md shadow-sm bg-white flex flex-col border-l-4 border-solid border-blue-500 border-opacity-0 hover:border-opacity-100";
  const activeListStyle =
    "mb-2 p-3 rounded-l-md shadow-sm bg-white flex flex-col border-l-4 border-solid border-blue-500 border-opacity-100 hover:border-opacity-100";

  return (
    <div
      className={props.selected ? activeListStyle : inactiveListStyle}
      onClick={(e: any) => props.onPress(e, props.template)}
    >
      <div>
        <span className="text-lg">{props.template.name}</span>
      </div>
      <div className="flex">
        <span className="text-xs text-gray-300">
          Created At: {new Date(props.template.createdAt).toLocaleString()}
        </span>
      </div>
    </div>
  );
}

export default TemplateListItem;
