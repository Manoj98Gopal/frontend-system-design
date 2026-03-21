interface AccordionItemProp {
  title: string;
  description: string;
  activeNum: boolean;
  makeActive: () => void;
}
import { Icon } from "@iconify/react";

const AccordionItem = ({
  title,
  description,
  activeNum,
  makeActive
}: AccordionItemProp) => {
  return (
    <div>
      <div
        className="py-3 px-4 bg-gray-400 flex justify-between items-center cursor-pointer border"
        onClick={makeActive}
      >
        <h1 className="text-xl font-medium">
          {title}
        </h1>

        <div>
          <Icon
            icon="material-symbols:keyboard-arrow-down"
            width="34"
            height="34"
          />{" "}
        </div>
      </div>

     <div
        className={`overflow-hidden transition-all duration-400 ${
          activeNum ? "max-h-50 p-4" : "max-h-0 p-0"
        } bg-gray-200`}
      >
        <p className="text-[16px] text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
