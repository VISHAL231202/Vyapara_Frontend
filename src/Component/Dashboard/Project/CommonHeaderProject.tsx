import { CardHeader } from "reactstrap";
import { H3, H4 } from "../../../AbstractElements";
import { CommonHeaderProjectPropsType } from "../../../Type/Dashboard/ProjectType";

const CommonHeaderProject = ({title,number}:CommonHeaderProjectPropsType) => {
  return (
    <CardHeader className="border-dash-bottom">
      <H4>{title}</H4>
      <div className="card-icon">
        <H3 className="f-w-600">{number}</H3>
      </div>
    </CardHeader>
  );
};

export default CommonHeaderProject;
