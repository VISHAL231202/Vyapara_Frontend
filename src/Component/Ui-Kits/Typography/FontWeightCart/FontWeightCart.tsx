import { Card, CardBody, Col } from "reactstrap";
import { H2 } from "../../../../AbstractElements";
import { fontWeightData } from "../../../../Data/Ui-Kits/Typography/Typography";
import { FontWeight, FontWeightTitle } from "../../../../utils/Constant";
import CardHeaderCommon from "../../CardHeaderCommon";

const FontWeightCart = () => {
  return (
    <Col xl="12">
      <Card>
        <CardHeaderCommon title={FontWeight} span={fontWeightData} headClass="pb-0"/>
        <CardBody className="d-flex flex-column gap-3">
          <H2 className="f-w-700">
            {FontWeightTitle} 1 Using<code> f-w-700</code>
          </H2>
          <H2 className="f-w-600">
            {FontWeightTitle} 2 Using<code> f-w-600</code>
          </H2>
          <H2 className="f-w-500">
            {FontWeightTitle} 3 Using<code> f-w-500</code>
          </H2>
          <H2 className="f-w-400">
            {FontWeightTitle} 4 Using<code> f-w-400</code>
          </H2>
          <H2 className="f-w-300">
            {FontWeightTitle} 5 Using<code> f-w-300</code>
          </H2>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FontWeightCart;
