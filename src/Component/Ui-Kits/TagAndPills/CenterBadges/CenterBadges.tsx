import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../CardHeaderCommon";
import { CenterBadgesHeading } from "../../../../utils/Constant";
import { centerBadgesContextData, centerBadgesData } from "../../../../Data/Ui-Kits/TagAndPills/TagAndPills";
import { Badges, LI, SVG, UL } from "../../../../AbstractElements";

const CenterBadges = () => {
  return (
    <Col lg="4">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={CenterBadgesHeading} span={centerBadgesData} />
        <CardBody>
          <UL className="d-flex center-badge flex-row">
            {centerBadgesContextData.map((item,i)=>(
                <LI className={`border-${item.color}`} key={i}>
                    <Badges color={item.color}>{item.badge}</Badges>
                    <SVG className={`svg-w-24 stroke-${item.color}`} iconId={item.icon} />
                </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CenterBadges;
