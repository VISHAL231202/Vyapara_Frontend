import { Card, CardBody, Col } from "reactstrap";
import { IconInHeadings } from "../../../../utils/Constant";
import { Image, P } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { iconInHeadingData } from "../../../../Data/BonusUi/BasicCard/BasicCard";
import CardHeaderCommon from "../../../Ui-Kits/CardHeaderCommon";

const IconInHeading = () => {
  const LibraryIcon = () => {
    return <i className="icofont icofont-library me-2"></i>;
  };

  return (
    <Col xl="6">
      <Card className="height_equal">
        <CardHeaderCommon title={IconInHeadings} span={iconInHeadingData} icon={<LibraryIcon />} headClass="pb-0" />
        <CardBody>
          <div className="d-flex gap-3 align-items-center list-behavior-1">
            <div className="flex-shrink-0">
              <Image className="tab-img img-fluid" src={dynamicImage(`blog/img.png`)} alt="profile"/>
            </div>
            <div className="flex-grow-1 ms-0">
              <P className="mb-xl-0 mb-sm-4">
                We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration, Search Engine Optimization and other Internet Marketing, Renewal of Services timely and effectively.
              </P>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default IconInHeading;
