import { Btn, H6, LI, Progressbar, SVG, UL } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import { Complete, Href, Reminder } from "../../../../utils/Constant";
import { tasksProjectBodyData } from "../../../../Data/Dashboard/Project/Project";
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";

const TasksProjectBody = () => {
  return (
    <>
      {tasksProjectBodyData.map((item, i) => (
        <tr key={i}>
          <td>
            <div className="d-flex align-items-center gap-2">
              <div className="flex-shrink-0">
                <SVG iconId={item.svgIcon} className="svg-w-19" />
              </div>
              <div className="flex-grow-1">
                <H6 className="f-w-500">{item.title}</H6>
                <div className="font-light mt-1 timer">
                  <SvgIcon iconId="clock" className="feather me-1" />
                  <span className="f-w-400 f-13">{item.time}</span>
                </div>
              </div>
            </div>
          </td>
          <td>
            <Link to={Href}>
              <H6 className="f-w-500">{item.project}</H6>
            </Link>
            <UL className="mt-1 simple-list">
              {item.details.map((data, i) => (
                <LI key={i} className="p-0">
                  <svg className="feather">
                    <use href={`../assets/svg/feather-icons/dist/feather-sprite.svg#${data.icon}`}></use>
                  </svg>
                  <span className="f-w-400 f-13">{data.name}</span>
                </LI>
              ))}
            </UL>
          </td>
          <td>
            <H6 className="f-w-500">{item.percentage} {Complete}</H6>
            <div className="progress-showcase mt-2">
              <Progressbar className={`sm-progress-bar progress-border-${item.color}`} value={item.value} />
            </div>
          </td>
          <td>
            <div className="task-icon-button">
              <Btn color="light-primary" className="edge-btn f-13 w-75">
                <SVG iconId="watch" className="svg-w-19" />
                <span>{Reminder}</span>
              </Btn>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default TasksProjectBody;
