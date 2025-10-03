import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Monthly, TaskListHeading, Weekly, Yearly } from "../../../../utils/Constant";
import { UL } from "../../../../AbstractElements";
import TaskListBody from "./TaskListBody";

const TaskList = () => {
  return (
    <Col xl="3" md="6">
      <Card className="task-card">
        <CardHeaderCommon headClass="pb-0" title={TaskListHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="filled-checkbox">
          <UL className="simple-list">
            <TaskListBody />
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TaskList;
