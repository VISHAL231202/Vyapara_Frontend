import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H3, P } from "../../../AbstractElements";
import { ToDoHeading } from "../../../utils/Constant";
import MarkAllAsFinished from "./MarkAllAsFinished";
import TodoListBody from "./TodoListBody";

const TodoBody = () => {
  return (
    <Col xl="9" className="xl-70 box-col-12">
      <Card>
        <CardHeader>
          <H3 className="mb-0">{ToDoHeading}</H3>
        </CardHeader>
        <CardBody>
          <div className="todo">
            <div className="todo-list-wrapper">
              <div className="todo-list-container">
                <MarkAllAsFinished />
                <TodoListBody />
              </div>
            </div>
            <div className="notification-popup hide">
              <P>
                <span className="task" />
                <span className="notification-text" />
              </P>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TodoBody;
