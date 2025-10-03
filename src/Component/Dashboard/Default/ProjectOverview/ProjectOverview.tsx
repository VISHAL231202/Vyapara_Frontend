import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Monthly, Project, ProjectOverviewHeading, Weekly, Yearly } from "../../../../utils/Constant";
import { H4 } from "../../../../AbstractElements";
import ProjectOverviewDetail from "./ProjectOverviewDetail";
import ProjectView from "./ProjectView";

const ProjectOverview = () => {
  return (
    <Col xl="3" sm="6">
      <Card className="project-card">
        <CardHeaderCommon title={ProjectOverviewHeading} firstItem={Weekly} secondItem={Monthly} thirdItem ={Yearly}/>
        <CardBody className="pt-0">
          <H4>
            56<span className="ms-1">{Project}</span>
          </H4>
          <ProjectOverviewDetail />
          <ProjectView />
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectOverview;
