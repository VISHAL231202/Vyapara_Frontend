import { Card, CardBody, Col } from "reactstrap";
import { WithoutShadowCards } from "../../../../utils/Constant";
import { withoutShadowCardDetails } from "../../../../Data/BonusUi/BasicCard/BasicCard";
import { Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import CardHeaderCommon from "../../../Ui-Kits/CardHeaderCommon";

const WithoutShadowCard = () => {
  return (
    <Col xl="6">
      <Card className="shadow-none solid-border">
        <CardHeaderCommon title={WithoutShadowCards} span={withoutShadowCardDetails} headClass="pb-0" />
        <CardBody>
          <div className="flex-space flex-wrap align-items-center">
            <Image className="tab-img" src={dynamicImage(`avatar/2.jpg`)} alt="profile" />
            <P>
              <strong>Visit Us: </strong> 2600 Hollywood Blvd,Florida, United
              States- 33020
              <br />
              <strong>Mail Us:</strong>contact@us@gmail.com
              <br />
              <strong>Contact Number: </strong>(954) 357-7760
            </P>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithoutShadowCard;
