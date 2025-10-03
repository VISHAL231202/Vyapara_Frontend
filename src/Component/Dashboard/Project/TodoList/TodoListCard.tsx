import { Card, CardBody, Col } from "reactstrap";
import { UL } from "../../../../AbstractElements";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Monthly, TodoList, Weekly, Yearly } from "../../../../utils/Constant";
import TodoListCardBody from "./TodoListCardBody";

const TodoListCard = () => {
  return (
    <Col md="6">
      <Card className="list-card">
        <CardHeaderCommon headClass="pb-0" title={TodoList} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody>
          <UL>
            <TodoListCardBody />
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TodoListCard;
