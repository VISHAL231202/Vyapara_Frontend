import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Btn, H4 } from "../../../../../AbstractElements";
import { Add, Cancel, Date, Href, Price, SelectSizeHeading, Size } from "../../../../../utils/Constant";

const SelectSize = () => {
  return (
    <>
      <H4 className="mt-4">{SelectSizeHeading}</H4>
      <Form>
        <div className="product-group">
          <Row>
            <Col sm="6">
              <FormGroup>
                <Label>{Size}</Label>
                <Input type="select" defaultValue={"S"}>
                  <option>S </option>
                  <option>M </option>
                  <option>L </option>
                  <option>XL </option>
                  <option>XXL</option>
                </Input>
              </FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup>
                <Label>{Date}</Label>
                <Input type="date" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col sm="12">
              <FormGroup>
                <Label>{Price}</Label>
                <Input type="number" />
              </FormGroup>
            </Col>
          </Row>
        </div>
      </Form>
      <div className="mt-4">
        <Row>
          <Col sm="12" className="text-end">
            <Btn color="primary" className="me-3" href={Href}>
              {Add}
            </Btn>
            <Btn color="secondary">{Cancel}</Btn>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default SelectSize;
