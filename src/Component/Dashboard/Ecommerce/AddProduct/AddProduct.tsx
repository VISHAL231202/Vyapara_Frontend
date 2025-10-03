import { Card, CardBody, Col, Row } from "reactstrap";
import { addProductData } from "../../../../Data/Dashboard/Ecommerce/Ecommerce";
import { H4, SVG } from "../../../../AbstractElements";
import YourOrder from "./YourOrder";
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";

const AddProduct = () => {
  return (
    <Col md="6" xl="4">
      <Card>
        <CardBody className="discount-product">
          <Row>
            {addProductData.map((data, i) => (
              <Col xs="6" key={i}>
                <H4 className="discount-title">{data.title}</H4>
                <div className={`main-box border-${data.color} mx-auto`}>
                  <SVG iconId={data.icon} className={`svg-w-24 fill-${data.color}`} />
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                  <H4 className="discount-content font-light f-w-500">{data.subTitle}</H4>
                  <div className={`bg-light-${data.color} rounded`}>
                    <SvgIcon iconId="plus" className="feather" />
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
      <YourOrder />
    </Col>
  );
};

export default AddProduct;
