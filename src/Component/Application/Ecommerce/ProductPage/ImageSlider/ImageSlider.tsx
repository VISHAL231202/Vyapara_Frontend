import { Carousel } from "react-responsive-carousel";
import { Card, CardBody, Col } from "reactstrap";

const ImageSlider = () => {
  return (
    <Col xxl="4" md="6" className="box-col-6">
      <Card>
        <CardBody className="pb-0">
          <Carousel className="owl-carousel owl-theme" showStatus={false} showIndicators={false} showArrows={false} swipeable={true} autoPlay={true} infiniteLoop transitionTime={300}>
            <div className="item">
              <img src="../assets/images/ecommerce/01.jpg" alt="" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/02.jpg" alt="" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/03.jpg" alt="" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/04.jpg" alt="" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/05.jpg" alt="" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/06.jpg" alt="" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/07.jpg" alt="" />
            </div>
            <div className="item">
              <img src="../assets/images/ecommerce/08.jpg" alt="" />
            </div>
          </Carousel>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImageSlider;
