//@ts-nocheck
import { Card, CardBody, Col, UncontrolledAccordion } from "reactstrap";
import { OutlineAccordions } from "../../../../utils/Constant";
import CommonAccordionItem from "../Common/CommonAccordionItem";
import { outlineData, outlineList, outlineList1 } from "../../../../Data/Ui-Kits/Accordion/Accordion";
import StaticAccordion from "./StaticAccordion";
import CardHeaderCommon from "../../CardHeaderCommon";

const NestedAccordion = () => {
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon title={OutlineAccordions} span={outlineData} headClass="pb-0" />
        <CardBody className="nestings">
          <UncontrolledAccordion stayOpen>
            <StaticAccordion />
            {outlineList.map((data, index) => (
              <CommonAccordionItem item={data} key={index} Nested />
            ))}
            {outlineList1.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </UncontrolledAccordion>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NestedAccordion;
