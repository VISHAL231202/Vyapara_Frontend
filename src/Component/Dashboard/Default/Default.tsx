import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Dashboard, Default } from "../../../utils/Constant";
import ProfileGreet from "./ProfileGreet/ProfileGreet";
import ProjectOverview from "./ProjectOverview/ProjectOverview";
import TotalClients from "./TotalClients/TotalClients";
import Investing from "./Investing/Investing";
import AllInvoices from "./AllInvoices/AllInvoices";
import TotalInvestment from "./TotalInvestment/TotalInvestment";
import TaskList from "./TaskList/TaskList";
import MonthlyOverview from "./MonthlyOverview/MonthlyOverview";
import TaskSummary from "./TaskSummary/TaskSummary";
import CoursesHighlighted from "./CoursesHighlighted/CoursesHighlighted";
import ScheduleTime from "./ScheduleTime/ScheduleTime";
import TotalVisit from "./TotalVisit/TotalVisit";
import Notifications from "./Notifications/Notifications";

const ContainerDefault = () => {
  return (
    <>
      <Breadcrumbs mainTitle={Default} parent={Dashboard} />
      <Container fluid className="default-dashboard">
        <Row>
          <ProfileGreet />
          <ProjectOverview />
          <TotalClients />
          <Investing />
          <AllInvoices />
          <TotalInvestment />
          <TaskList />
          <MonthlyOverview />
          <TaskSummary />
          <CoursesHighlighted />
          <ScheduleTime />
          <TotalVisit />
          <Notifications />
        </Row>
      </Container>
    </>
  );
};

export default ContainerDefault;
