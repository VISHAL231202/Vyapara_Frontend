import Slider from "react-slick";
import { Card, CardBody, Col } from "reactstrap";
import { Image } from "../../../../AbstractElements";
import { MouseOverTitle } from "../../../../utils/Constant";
import { autoPlayDataList, mouseOverSubTitle, mouseWheelSliderOptions } from "../../../../Data/BonusUi/OwlCarousel/OwlCarousel";
import CardHeaderCommon from "../../../Ui-Kits/CardHeaderCommon";
import { dynamicImage } from "../../../../Service";

const MouseOver = () => {
  return (
    <Col xl={6} sm={12}>
      <Card className="auto-slider">
        <CardHeaderCommon headClass="pb-0" title={MouseOverTitle} span={mouseOverSubTitle} />
        <CardBody>
          <Slider {...mouseWheelSliderOptions}>
            {autoPlayDataList.map((data, index) => (
              <div className="item px-1" key={index}>
                <Image src={dynamicImage(`${data.image}`)} alt="Drawing-room" className="img-fluid rounded" />
              </div>
            ))}
          </Slider>
        </CardBody>
      </Card>
    </Col>
  );
};
export default MouseOver;
