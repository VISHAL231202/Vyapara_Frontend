//@ts-nocheck
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import { SVG } from "../../../../AbstractElements";
import NestedCustom from "../NestedAccordion/NestedCustom";

const CommonAccordionItem = ({ item, Nested }) => {
  return (
    <AccordionItem className={item.accordionItemClass}>
      <AccordionHeader targetId={item.id} className={item.accordionHeaderClass}>
        {item.iconWithTitle && <SVG iconId={item.iconWithTitle} className={item.svgClass} />}
        <span className={item.spanClass}>{item.accordionHeading}</span>
      </AccordionHeader>
      <AccordionBody accordionId={item.id}>{Nested ? <NestedCustom /> : item.bodyText}</AccordionBody>
    </AccordionItem>
  );
};

export default CommonAccordionItem;
