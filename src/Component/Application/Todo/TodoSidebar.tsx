import { useState } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import { ToDoFilter } from "../../../utils/Constant";
import TodoUserProfile from "./TodoUserProfile";
import TodoNavBar from "./TodoNavBar";

const TodoSidebar = () => {
  const [open,setOpen] = useState(false)
  return (
    <Col xl="3" className="xl-30 box-col-12">
      <div className="email-sidebar md-sidebar">
        <Btn color="primary" className="email-aside-toggle md-sidebar-toggle" onClick={()=>setOpen(!open)}>
          {ToDoFilter}
        </Btn>
        <div className={`email-left-aside md-sidebar-aside ${open ? "open" : ""}`}>
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark custom-scrollbar">
                <TodoUserProfile />
                <TodoNavBar />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Col>
  );
};

export default TodoSidebar;
