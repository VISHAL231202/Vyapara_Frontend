import { Card, CardBody, Col, Row } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Monthly, TaskSummaryHeading, Weekly, Yearly } from "../../../../utils/Constant";
import TaskSummaryLeft from "./TaskSummaryLeft";
import TaskSummaryRight from "./TaskSummaryRight";

const TaskSummary = () => {
  return (
    <Col xl="5" md="6">
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
  );
};

export default TaskSummary;
