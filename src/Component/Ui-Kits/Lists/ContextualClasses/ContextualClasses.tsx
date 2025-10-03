import { Card, CardBody, Col } from "reactstrap";
import { ContextualClassesHeading, Href } from "../../../../utils/Constant";
import {contextualData, contextualDataList} from "../../../../Data/Ui-Kits/Lists/Lists";
import { LI, UL } from "../../../../AbstractElements";
import CardHeaderCommon from "../../CardHeaderCommon";

const ContextualClasses = () => {
  return (
    <Col xxl="6">
      <Card className="height-equal">
        <CardHeaderCommon title={ContextualClassesHeading} span={contextualData} headClass="pb-0" />
        <CardBody>
          <UL>
            <LI href={Href} className="list-group-item-action list-group-item-primary" >
              This is Primary bg you can use
              <em className="font-primary fw-bold"> .list-group-item-primary </em> class.
            </LI>
            {contextualDataList.map((item, index) => (
              <LI href={Href} className={`list-group-item-action list-group-item-${item}`} key={index} >
                This is <span className="text-capitalize">{item}</span> bg you can use
                <em className={`font-${item} fw-bold`}> .list-group-item-{item}</em> class.
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ContextualClasses;
