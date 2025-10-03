import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { ActivityReportHeading, Monthly, Weekly, Yearly } from "../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { activityReportChartData } from "../../../../Data/Dashboard/DashboardChartData";

const ActivityReport = () => {
  return (
    <Col md="6">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={ActivityReportHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody>
          <div className="chart-container chart-height">
            <ReactApexChart options={activityReportChartData} series={activityReportChartData.series} type="bar" height={300} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActivityReport;
