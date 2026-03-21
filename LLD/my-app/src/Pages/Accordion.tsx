import { useState } from "react";
import AccordionItem from "../components/AccordionItem";

interface AccordionData {
  title: string;
  description: string;
}

const accordionList: AccordionData[] = [
  {
    title: "Accordion Item #1",
    description:
      "This is the first item's accordion body. It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
  },
  {
    title: "Accordion Item #2",
    description:
      "This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
  },
  {
    title: "Accordion Item #3",
    description:
      "This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the .accordion-body, though the transition does limit overflow."
  }
];

const Accordion = () => {


    const [activeAccordion, setActiveAccordion] = useState<Number | null>(0)




  return <div className="max-w-[50%] m-auto pt-14">
    {accordionList?.map((data,idx) => <AccordionItem 
    key={idx}
            title={data.title}
            description={data.description}
            activeNum={activeAccordion === idx}
            makeActive={() => {
                if(activeAccordion === idx){
                    setActiveAccordion(null)
                    return
                }
                setActiveAccordion(idx)
            }}
        />)}
  </div>;
};

export default Accordion;
