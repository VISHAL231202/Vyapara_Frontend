import { Card, CardBody, Col, Table } from "reactstrap";
import { Monthly, TeamMembersHeading, Weekly, Yearly } from "../../../../utils/Constant";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import TeamMembersBody from "./TeamMembersBody";

const TeamMembers = () => {
  return (
    <Col md="12" lg="6">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={TeamMembersHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} /> 
        <CardBody className="team-table pt-0">
          <Table borderless responsive>
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Designation</th>
                <th>Task</th>
                <th>Graph</th>
              </tr>
            </thead>
            <tbody>
              <TeamMembersBody />
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TeamMembers;
