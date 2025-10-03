import { Card, CardBody, Col, Row } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Monthly, TaskSummaryHeading, Weekly, Yearly } from "../../../../utils/Constant";
import TaskSummaryLeft from "../../../Dashboard/Default/TaskSummary/TaskSummaryLeft";
import TaskSummaryRight from "../../../Dashboard/Default/TaskSummary/TaskSummaryRight";

const TaskSummary = () => {
  return (
    <Col sm="6" xl="5">
      <Row>
        <Col xl="12">
          <Card className="summary-card">
            <CardHeaderCommon headClass="pb-0" title={TaskSummaryHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
            <CardBody>
              <Row>
                <TaskSummaryLeft />
                <TaskSummaryRight />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  );
};

export default TaskSummary;
