import { Btn } from "../../../AbstractElements";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setVisible } from "../../../ReduxToolkit/Reducers/ToDoSlice";
import { AddNewTaskHeading } from "../../../utils/Constant";

const AddNewTask = () => {
  const{visible} = useAppSelector((state)=> state.todo)
  const dispatch = useAppDispatch()
  return (
    <div className="todo-list-footer ms-2">
      <div className="add-task-btn-wrapper">
        <span className="add-task-btn">
          <Btn color="primary" onClick={()=>dispatch(setVisible(!visible))}>
            <i className="icon-plus" /> {AddNewTaskHeading}
          </Btn>
        </span>
      </div>
    </div>
  );
};

export default AddNewTask;
