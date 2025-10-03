import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Apps, ToDoHeading } from "../../../utils/Constant";
import TodoSidebar from "./TodoSidebar";
import TodoBody from "./TodoBody";

const TodoContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ToDoHeading} parent={Apps} />
      <Container fluid className="email-wrap bookmark-wrap todo-wrap">
        <Row>
          <TodoSidebar />
          <TodoBody />
        </Row>
      </Container>
    </>
  );
};

export default TodoContainer;
