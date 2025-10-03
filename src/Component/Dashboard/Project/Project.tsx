import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Dashboard, ProjectDashboard } from "../../../utils/Constant";
import TotalProject from "./TotalProject/TotalProject";
import TotalClients from "./TotalClients/TotalClients";
import ProjectsOverview from "./ProjectsOverview/ProjectsOverview";
import TasksProject from "./TasksProject/TasksProject";
import TodoList from "./TodoList/TodoList";
import AddTask from "./AddTask/AddTask";
import TotalRevenue from "./TotalRevenue/TotalRevenue";

const ContainerProject = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProjectDashboard} parent={Dashboard} />
      <Container fluid className="project-dashboard">
        <Row>
          <TotalProject />
          <TotalRevenue />
          <TotalClients />
          <ProjectsOverview />
          <TasksProject />
          <TodoList />
          <AddTask />
        </Row>
      </Container>
    </>
  );
};

export default ContainerProject;
