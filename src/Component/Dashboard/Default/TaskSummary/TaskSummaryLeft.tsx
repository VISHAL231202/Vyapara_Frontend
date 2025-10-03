import { Col } from "reactstrap";
import { H4, H5, H6, LI, SVG, UL } from "../../../../AbstractElements";
import { taskSummaryLeftData } from "../../../../Data/Dashboard/Default/Default";
import TaskBottom from "./TaskBottom";

const TaskSummaryLeft = () => {
  return (
    <Col sm="8" className="custom-width-1">
      <div className="project-cost">
        <H5 className="font-light">
          <SVG iconId="Chart" className="svg-w-20 stroke-light me-2" />
          Estimated project cost
        </H5>
        <UL className="flex-row simple-list d-flex">
          {taskSummaryLeftData.map((item, i) => (
            <LI className="card-hover p-0" key={i}>
              <div className={`d-flex bg-light-${item.color} flex-column`}>
                <div className={`flex-shrink-0 border-${item.color}`}>
                  <SVG iconId={item.icon} className={`svg-w-24 stroke-${item.color}`} />
                </div>
                <div className="flex-grow-1">
                  <H6 className="f-w-500">{item.title}</H6>
                  <H4 className="f-w-700">{item.count}</H4>
                </div>
              </div>
            </LI>
          ))}
        </UL>
        <TaskBottom />
      </div>
    </Col>
  );
};

export default TaskSummaryLeft;
