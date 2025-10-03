import { Card, CardBody, Col } from "reactstrap";
import { H4, H5, P } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import { Href } from "../../../../utils/Constant";

const YourOrder = () => {
  return (
    <Col xl="12">
      <Card className="track-order">
        <CardBody>
          <H4>Your order has already been sent.</H4>
          <P className="font-light f-14">
            Use this tracking number to keep track of your order.
          </P>
          <H5>5435987456325894</H5>
          <Link className="btn btn-primary" to={Href}>
            Check Your Order Details
          </Link>
        </CardBody>
      </Card>
    </Col>
  );
};

export default YourOrder;
