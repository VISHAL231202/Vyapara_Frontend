import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../Ui-Kits/CardHeaderCommon";
import { UniqueSweetalertHeading } from "../../../../utils/Constant";
import DangerModeBtn from "./DangerModeBtn";
import AnimationAlertBtn from "./AnimationAlertBtn";
import TimerBtn from "./TimerBtn";

const UniqueSweetalert = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={UniqueSweetalertHeading} />
        <CardBody>
          <div className="common-flex">
            <DangerModeBtn />
            <AnimationAlertBtn />
            <TimerBtn />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UniqueSweetalert;
