import { MarkAllAsFinishedHeading, MarkAllAsIncomplete } from "../../../utils/Constant";
import AddNewTask from "./AddNewTask";
import { useAppDispatch, useAppSelector } from "../../../ReduxToolkit/Hooks";
import { setAllTaskCompleted } from "../../../ReduxToolkit/Reducers/ToDoSlice";

const MarkAllAsFinished = () => {
  const {allTaskCompleted} = useAppSelector((state)=>state.todo)
  const dispatch = useAppDispatch()

  return (
    <div className="mark-all-tasks">
      <div className="mark-all-tasks-container">
        <span className={`mark-all-btn ${allTaskCompleted ? "move-up" : "move-down" }`} role="button" onClick={()=>dispatch(setAllTaskCompleted(!allTaskCompleted))}>
          <span className="btn-label">{allTaskCompleted ? MarkAllAsFinishedHeading : MarkAllAsIncomplete}</span>
          <span className={`action-box ${allTaskCompleted ? "completed" : "" }`}>
            <i className="icon">
              <i className="icon-check" />
            </i>
          </span>
        </span>
      </div>
      <AddNewTask />
    </div>
  );
};

export default MarkAllAsFinished;
