import CountUp from 'react-countup';
import { Col, Row } from "reactstrap";
import { H3, Image, P } from "../../../../../AbstractElements";
import { dynamicImage } from "../../../../../Service";
import { Invoice } from "../../../../../utils/Constant";

const InvoiceSixHeader = () => {
  return (
    <div>
      <Row>
        <Col sm="6">
          <div className="d-flex">
            <div className="media-left">
              <Image className="media-object img-60 for-light" src={dynamicImage("logo/logo-login.png")} alt="logo" />
              <Image className="media-object img-60 for-dark" src={dynamicImage("logo/dark-login-logo.png")} alt="logo" />
            </div>
            <div className="flex-grow-1 m-l-20 text-right"> 
              <P>
                hello@Edmin.in <br /> <span>289-335-6503</span>
              </P>
            </div>
          </div>
        </Col>
        <Col sm="6">
          <div className="text-md-end text-xs-center">
            <H3>
              {Invoice} #<span className="counter"> <CountUp end={1069} duration={3} /></span>
            </H3>
            <P>
              Issued: May<span> 27, 2024</span>
              <br /> Payment Due: June <span>27, 2024</span>
            </P>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InvoiceSixHeader;
