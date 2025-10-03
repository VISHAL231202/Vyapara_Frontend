import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../CardHeaderCommon";
import { GroupingWithCounterHeading } from "../../../../utils/Constant";
import {
  groupingWithCounter,
  groupingWithCounterData,
} from "../../../../Data/Ui-Kits/Avtar/Avtar";
import { Image, LI, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import DynamicGroupingWithCounter from "./DynamicGroupingWithCounter";

const GroupingWithCounter = () => {
  return (
    <Col xl="3" md="6">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={GroupingWithCounterHeading} span={groupingWithCounter} />
        <CardBody>
          <div className="avatar-showcase">
            <div className="avatars">
              <div className="customers d-inline-block avatar-group">
                <UL className="d-flex flex-row">
                  <LI className="d-inline-block">
                    <Image className="img-40 b-r-10" src={dynamicImage(`avatar/4.jpg`)} alt="#" />
                  </LI>
                  {groupingWithCounterData.map((item, i) => (
                    <LI className="d-inline-block" key={i}>
                      <Image className="img-40 b-r-10" src={dynamicImage(`avatar/${item}.jpg`)} alt="#" />
                    </LI>
                  ))}
                  <LI className="d-inline-block">
                    <span className="b-r-10">+4</span>
                  </LI>
                </UL>
              </div>
              <DynamicGroupingWithCounter />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GroupingWithCounter;
