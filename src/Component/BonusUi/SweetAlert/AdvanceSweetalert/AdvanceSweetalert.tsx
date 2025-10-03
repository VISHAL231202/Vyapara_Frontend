import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../Ui-Kits/CardHeaderCommon";
import { AdvanceSweetalertHeading } from "../../../../utils/Constant";
import QuestionsStateBtn from "./QuestionsStateBtn";
import ToastAlertBtn from "./ToastAlertBtn";

const AdvanceSweetalert = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={AdvanceSweetalertHeading} />
        <CardBody>
          <div className="common-flex">
            <QuestionsStateBtn />
            <ToastAlertBtn />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AdvanceSweetalert;
