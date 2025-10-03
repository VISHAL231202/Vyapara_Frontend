import { Card, CardBody, Col, Row } from "reactstrap";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { CategoryOverviewHeading, Monthly, Weekly, Yearly } from "../../../../../utils/Constant";
import CategoryOverviewDetails from "./CategoryOverviewDetails";
import ReactApexChart from "react-apexcharts";
import { categoryOverviewChart } from "../../../../../Data/Dashboard/DashboardChartData";

const CategoryOverview = () => {
  return (
    <Col md="6" xl="5">
      <Card>
        <CardHeaderCommon title={CategoryOverviewHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="category">
          <Row>
            <Col xl="6" xs="6">
              <CategoryOverviewDetails />
            </Col>
            <Col xl="6" xs="6">
              <div id="category" className="category-chart">
                <ReactApexChart options={categoryOverviewChart} series={categoryOverviewChart.series} width={350} type="radialBar" />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CategoryOverview;
