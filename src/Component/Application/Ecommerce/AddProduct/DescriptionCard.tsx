import { Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { H4 } from "../../../../AbstractElements";
import { Description, EnterProductDescription, EnterProductName, ProductDescription, ProductName } from "../../../../utils/Constant";
import CategoriesForm from "./CategoriesForm";

const DescriptionCard = () => {
  return (
    <Card>
      <CardBody>
        <div className="product-info">
          <H4>{Description}</H4>
          <Form>
            <div className="product-group">
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Label>{ProductName}</Label>
                    <Input placeholder={EnterProductName} type="text"/>
                    <span className="text-danger" />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col sm="12">
                  <FormGroup>
                    <Label>{ProductDescription}</Label>
                    <Input placeholder={EnterProductDescription} type="text" />
                    <span className="text-danger" />
                  </FormGroup>
                </Col>
              </Row>
            </div>
          </Form>
          <CategoriesForm />
        </div>
      </CardBody>
    </Card>
  );
};

export default DescriptionCard;
