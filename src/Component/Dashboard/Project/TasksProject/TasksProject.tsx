import { Card, CardBody, Col, Table } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Monthly, Tasks, Weekly, Yearly } from "../../../../utils/Constant";
import TasksProjectBody from "./TasksProjectBody";

const TasksProject = () => {
  return (
    <Col lg="6" xl="8" xxl="7">
      <Card>
        <CardHeaderCommon headClass="pb-0"  title={Tasks} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="pt-0 task-table">
          <Table responsive>
            <tbody>
              <TasksProjectBody />
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TasksProject;
