import Slider from "react-slick";
import { Card, CardBody, Col } from "reactstrap";
import { Image } from "../../../../AbstractElements";
import { autoPlayData, autoPlayDataList, autoPlaySliderOptions } from "../../../../Data/BonusUi/OwlCarousel/OwlCarousel";
import { dynamicImage } from "../../../../Service";
import { AutoPlayVariants } from "../../../../utils/Constant";
import CardHeaderCommon from "../../../Ui-Kits/CardHeaderCommon";

const AutoPlayVariant = () => {

  return (
    <Col xl="6" xs="12">
      <Card className="auto-slider">
        <CardHeaderCommon title={AutoPlayVariants} span={autoPlayData} headClass="pb-0" />
        <CardBody>
          <Slider {...autoPlaySliderOptions}>
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

export default AutoPlayVariant;
