import TodoListFooter from "./TodoListFooter";
import { Badges, H4, H5, LI, UL } from "../../../AbstractElements";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { removeItems, updateTodo } from "../../../ReduxToolkit/Reducers/ToDoSlice";
import { ToDoProp } from "../../../Type/Application/Todo/Todo";
import { toast } from "react-toastify";

const TodoListBody = () => {
  const {todoList} = useAppSelector((state)=> state.todo)
  const dispatch = useAppDispatch()
  const handleMarkedTodo = (item: ToDoProp) => {
    if (item.status === "completed") {
      dispatch(updateTodo({ id: item.id, status: "pending", badgeClass: "light-danger"}));
      toast.error(item.title + " as Incomplete");
    } else if (item.status === "pending") {
      dispatch(updateTodo({ id: item.id, status: "completed", badgeClass: "light-success" }));
      toast.success(item.title + " as Complete");
    }
  };
  return (
    <div className="todo-list-body">
      <TodoListFooter />
      <UL id="todo-list">
        {todoList.map((item, i) => (
          <LI className={`task ${item.status === "completed" ? "completed" : ""}`} key={i}>
            <div className="task-container">
              <div  onClick={() => handleMarkedTodo(item)}> 
                <H4 className="task-label">{item.title}</H4>
              </div>
              <div className="d-flex align-items-center gap-4">
                <Badges color={item.badge !== "Done" ? item.badgeClass : "light-success" } onClick={() => handleMarkedTodo(item)}>{item.badge}</Badges>
                <H5 className="assign-name m-0">{item.timeLimit}</H5>
                <span className="task-action-btn">
                  <span className="action-box large delete-btn" title="Delete Task" >
                    <i className="icon">
                      <i className="icon-trash" onClick={()=>dispatch(removeItems(item))} />
                    </i>
                  </span>
                  <span className="action-box large complete-btn" title="Mark Complete">
                    <i className="icon">
                      <i className="icon-check" onClick={()=>handleMarkedTodo(item)} />
                    </i>
                  </span>
                </span>
              </div>
            </div>
          </LI>
        ))}
      </UL>
    </div>
  );
};

export default TodoListBody;
