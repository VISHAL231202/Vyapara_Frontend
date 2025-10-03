import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../CardHeaderCommon";
import { AnimatedBadgesHeading } from "../../../../utils/Constant";
import { animatedBadgesContextData, animatedBadgesData } from "../../../../Data/Ui-Kits/TagAndPills/TagAndPills";
import { LI, SVG, UL } from "../../../../AbstractElements";

const AnimatedBadges = () => {
  return (
    <Col lg="4" md="6">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={AnimatedBadgesHeading} span={animatedBadgesData} />
        <CardBody className="animated-badge">
          <UL className="d-flex flex-row">
            {animatedBadgesContextData.map((item,i)=>(
                <LI className={`bg-common-${item.color}`} key={i}>
                    <span className={`dote-${item.color}`} />
                    <SVG iconId={item.icon} className="svg-w-20" />
                </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AnimatedBadges;
