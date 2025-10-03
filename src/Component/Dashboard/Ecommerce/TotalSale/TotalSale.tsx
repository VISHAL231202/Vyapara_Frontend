import { Col, Row } from "reactstrap";
import NewOrders from "./NewOrders/NewOrders";
import TopSellingProducts from "./TopSellingProducts/TopSellingProducts";
import CategoryOverview from "./CategoryOverview/CategoryOverview";

const TotalSale = () => {
  return (
    <Col xl="9">
      <Row>
        <NewOrders />
        <TopSellingProducts />
        <CategoryOverview />
      </Row>
    </Col>
  );
};

export default TotalSale;
