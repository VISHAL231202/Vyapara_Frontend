import { Card, CardBody, Col, Input, Row } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { CurrentYTD, Monthly, SalesByProductHeading, Weekly, Yearly } from "../../../../utils/Constant";
import { H5, H6 } from "../../../../AbstractElements";
import SalesByProductTable from "./SalesByProductTable";

const SalesByProduct = () => {
  return (
    <Col md="6" xl="4">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={SalesByProductHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="sale-product pt-0">
          <Row>
            <Col xs="5">
              <H5 className="f-w-500 mb-1 mt-2">{CurrentYTD}</H5>
              <H6 className="font-light">Feb 2, 2024 to Jan 23,</H6>
            </Col>
            <Col xs="7">
              <Input className="form-select" type="select">
                <option>Current YTD</option>
                <option>Current MTD</option>
                <option>YTD earning</option>
                <option>YTD Net Pay</option>
                <option>MTD Earning</option>
              </Input>
            </Col>
          </Row>
          <SalesByProductTable />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesByProduct;
