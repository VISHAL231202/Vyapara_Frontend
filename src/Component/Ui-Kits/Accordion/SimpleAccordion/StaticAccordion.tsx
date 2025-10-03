import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import { P } from "../../../../AbstractElements";

const StaticAccordion = () => {
  return (
    <AccordionItem>
      <AccordionHeader targetId="1" className="accordion-light-primary ">
        <span className="font-primary">What do web designers do ?</span>
      </AccordionHeader>
      <AccordionBody accordionId="1">
        <P className="mb-0">
          Web design <em className="font-danger">identifies the goals</em> of a website or webpage and promotes accessibility for all potential users. This process involves organizing content and images across a series of pages and integrating applications and other interactive elements.
        </P>
      </AccordionBody>
    </AccordionItem>
  );
};

export default StaticAccordion;
