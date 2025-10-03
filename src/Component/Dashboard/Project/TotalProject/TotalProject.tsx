import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import { totalProjectChartData } from "../../../../Data/Dashboard/DashboardChartData";
import { TotalProjectHeading } from "../../../../utils/Constant";
import CommonHeaderProject from "../CommonHeaderProject";
import TotalProjectDetail from "./TotalProjectDetail";

const TotalProject = () => {
  return (
    <Col sm="6" md="4">
      <Card className="total-project">
        <CommonHeaderProject title={TotalProjectHeading} number='3051' />
        <CardBody>
          <Row>
            <Col xs="6" className="custom-width">
              <ReactApexChart className="customer-chart" options={totalProjectChartData} series={totalProjectChartData.series} type="donut" height={260} />
            </Col>
            <TotalProjectDetail />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalProject;
