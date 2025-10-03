import React, { LegacyRef } from "react";
import { Link } from "react-router-dom";
import { CardBody, Table } from "reactstrap";
import SweetAlert from "sweetalert2";
import { H6, P } from "../../../../AbstractElements";
import SvgIcon from "../../../../CommonElements/SVG/SvgIcon";
import { useAppDispatch, useAppSelector } from "../../../../ReduxToolkit/Hooks";
import { setAllTasks } from "../../../../ReduxToolkit/Reducers/TasksSlice";
import { Href } from "../../../../utils/Constant";

const CreatedByMe = React.forwardRef((props, ref: LegacyRef<HTMLDivElement> | undefined) => {
  const { allTasks } = useAppSelector((state) => state.tasks);
  const dispatch = useAppDispatch();
  const deleteTask = (userId: number) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        const updatedTask = allTasks.filter((data) => data.id !== userId);
        dispatch(setAllTasks(updatedTask));
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };
  return (
    <div ref={ref}>
      <CardBody className="p-0">
        <div className="taskadd">
          <div className="custom-scrollbar">
            <Table responsive>
              <tbody>
                {allTasks.map((data) => (
                  <tr key={data.id}>
                    <td>
                      <H6 className="task_title_0 f-w-600">{data.title}</H6>
                      <P className="project_name_0">{data.collection}</P>
                    </td>
                    <td>
                      <P className="task_desc_0">{data.description}</P>
                    </td>
                    <td className="task-action">
                      <Link className="me-2" to={Href}>
                        <SvgIcon iconId="link" className="feather" />
                      </Link>
                      <Link to={Href}>
                        <SvgIcon iconId="more-horizontal" className="feather" />
                      </Link>
                    </td>
                    <td>
                      <Link to={Href} onClick={() => deleteTask(data.id)}>
                        <SvgIcon iconId="trash-2" className="feather" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </CardBody>
    </div>
  );
});

export default CreatedByMe;
