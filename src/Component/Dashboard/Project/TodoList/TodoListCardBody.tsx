import { Input, Label } from "reactstrap";
import { Btn, H5, LI } from "../../../../AbstractElements";
import { todoListCardBodyData } from "../../../../Data/Dashboard/Project/Project";

const TodoListCardBody = () => {
  return (
    <>
      {todoListCardBodyData.map((item, i) => (
        <LI key={i} className="list-item">
          <div className="d-flex align-items-center">
            <div className={`form-check checkbox checkbox-solid-primary`}>
              <Input type="checkbox" id={item.id} />
              <Label className="form-check-label" for={item.id} />
            </div>
            <H5 className="f-w-500">{item.todo}</H5>
          </div>
          <div>
            <Btn color={`light-${item.color}`} className="edge-btn f-12 w-100">
              {item.btnName}
            </Btn>
          </div>
        </LI>
      ))}
    </>
  );
};

export default TodoListCardBody;
