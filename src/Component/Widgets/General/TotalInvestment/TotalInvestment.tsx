import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Monthly, TotalInvestmentHeading, Weekly, Yearly} from "../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { totalInvestmentChart } from "../../../../Data/Dashboard/DashboardChartData";

const TotalInvestment = () => {
  return (
    <Col sm="6" xl="3">
      <Card className="invest-card">
        <CardHeaderCommon title={TotalInvestmentHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly}/>
        <CardBody className="p-0">
          <ReactApexChart options={totalInvestmentChart} series={totalInvestmentChart.series} height={237} type={"polarArea"}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalInvestment;
