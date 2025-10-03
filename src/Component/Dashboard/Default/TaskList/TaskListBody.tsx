import { H5, H6, LI } from "../../../../AbstractElements";
import { Input, Label } from "reactstrap";
import { Link } from "react-router-dom";
import { Href, Monthly, Weekly, Yearly } from "../../../../utils/Constant";
import CardHeaderDropdown from "../../../../CommonElements/CommonCardHeader/CardHeaderDropdown";
import { taskListBodyData } from "../../../../Data/Dashboard/Default/Default";

const TaskListBody = () => {
  return (
    <>
      {taskListBodyData.map((item, i) => (
        <LI className={`d-flex line-${item.color}`} key={i}>
          <div className="flex-shrink-0">
            <div className="form-check checkbox checkbox-solid-primary">
              <Input type="checkbox" id={`solid${i}`} />
              <Label className="form-check-label" for={`solid${i}`} />
            </div>
          </div>
          <div className="flex-grow-1">
            <Link to={Href}>
              <H5 className="f-w-500">{item.task}</H5>
            </Link>
            <H6>{item.userName}</H6>
          </div>
          <CardHeaderDropdown  firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly}  />
        </LI>
      ))}
    </>
  );
};

export default TaskListBody;
