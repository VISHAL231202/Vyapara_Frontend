import React from "react";
import Breadcrumbs from "../../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Dashboard, ProjectDashboard } from "../../../../utils/Constant";
import { Container, Row } from "reactstrap";
import TotalUsers from "./TotalUsers/TotalUsers";
import TotalRevenue from "./TotalRevenue/TotalRevenue";
import ActiveVendors from "./ActiveVendors/ActiveVendors";
import RecentDeliveryRequests from "./RecentDeliveryRequests/RecentDeliveryRequests";
import PendingDeliveries from "./PendingDeliveries/PendingDeliveries";

const VyDashBoard = () => {
  return (
    <>
      <Breadcrumbs mainTitle={ProjectDashboard} parent={Dashboard} />
      <Container fluid className="basicinit-page project-dashboard">
        <Row>
          <TotalUsers />
          <TotalRevenue />
          <ActiveVendors />
          <PendingDeliveries />
        </Row>
        <Row>
          <RecentDeliveryRequests />
        </Row>
      </Container>
    </>
  );
};

export default VyDashBoard;
