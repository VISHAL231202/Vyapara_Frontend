import { Card, CardBody, Col, Input, Label, Row } from "reactstrap";
import { H6 } from "../../../../../AbstractElements";
import CommonCardHeader from "../../../../../CommonElements/CommonCardHeader/CommonCardHeader";
import { variationCheckboxData, variationCheckboxDataList } from "../../../../../Data/Forms/FormsControl/MegaOption/MegaOption";
import { ChooseActivities, VariationCheckboxHeading } from "../../../../../utils/Constant";
import VariationCheckboxUpgrade from "./VariationCheckboxUpgrade";

const VariationCheckbox = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={VariationCheckboxHeading} span={variationCheckboxData} headClass="pb-0"/>
        <CardBody>
          <Row className="g-3">
            <Col xl="4" md="5">
              <div className="card-wrapper default-border rounded-3 h-100 checkbox-checked">
                <H6 className="sub-title">{ChooseActivities}</H6>
                {variationCheckboxDataList.map(
                  ({ id, color, check, labelText }, index) => (
                    <div className="payment-wrapper" key={index}>
                      <div className="payment-first">
                        <Label className="d-block" for={`check-${id}`} check> 
                          <Input id={`check-${id}`} className={`checkbox-${color}`} type="checkbox" defaultChecked={check}/>
                          {labelText}
                        </Label>
                      </div>
                    </div>
                  )
                )}
              </div>
            </Col>
            <VariationCheckboxUpgrade />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationCheckbox;
