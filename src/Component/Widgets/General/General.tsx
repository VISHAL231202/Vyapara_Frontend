import { Container, Row } from "reactstrap";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { General, Widgets } from "../../../utils/Constant";
import TotalSale from "./TotalSale/TotalSale";
import ProductOffer from "./ProductOffer/ProductOffer";
import ScheduleTime from "./ScheduleTime/ScheduleTime";
import SalesSummary from "./SalesSummary/SalesSummary";
import TotalInvestment from "./TotalInvestment/TotalInvestment";
import TaskSummary from "./TaskSummary/TaskSummary";
import HomeEstate from "./HomeEstate/HomeEstate";

const ContainerGeneral = () => {
  return (
    <>
      <Breadcrumbs mainTitle={General} parent={Widgets} />
      <Container fluid className="general-widget">
        <Row>
          <TotalSale />
          <ProductOffer />
          <ScheduleTime />
          <SalesSummary />
          <TotalInvestment />
          <TaskSummary />
          <HomeEstate />
        </Row>
      </Container>
    </>
  );
};

export default ContainerGeneral;
