import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../CardHeaderCommon";
import { ImageTooltipHeading } from "../../../../utils/Constant";
import { imageTooltipContextData, imageTooltipData} from "../../../../Data/Ui-Kits/Tooltip/Tooltip";
import { UL } from "../../../../AbstractElements";
import ImageTooltipBody from "./ImageTooltipBody";

const ImageTooltip = () => {
  return (
    <Col xl="6" lg="5">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={ImageTooltipHeading} span={imageTooltipData}/>
        <CardBody>
          <UL className="common-flex flex-row">
            {imageTooltipContextData.map((item, i) => (
              <ImageTooltipBody item={item} i={i} key={i} />
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImageTooltip;
