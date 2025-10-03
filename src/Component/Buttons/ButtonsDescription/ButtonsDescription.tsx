import { Card, CardBody, Col, Row } from "reactstrap";
import CardHeaderCommon from "../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { ButtonsDescriptionHeading } from "../../../utils/Constant";
import { P } from "../../../AbstractElements";
import { buttonsDescriptionData } from "../../../Data/Buttons/Buttons";

const ButtonsDescription = () => {
  return (
    <Col sm="12">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={ButtonsDescriptionHeading} />
        <CardBody>
          <Row>
            <Col sm="12">
                {buttonsDescriptionData.map((data,i)=>(
                    <P className="mb-1" key={i}>
                        <span>
                        Use <code>{data.code}</code> {data.text} <code>{data.code1}</code> {data.text1}
                        </span>
                    </P>
                ))}
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ButtonsDescription;
