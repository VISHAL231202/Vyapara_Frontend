import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { PolarChartHeading } from "../../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { polarChartData } from "../../../../../Data/Charts/ApexChart/ApexChartData";

const PolarChart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={PolarChartHeading} />
        <CardBody>
          <ReactApexChart options={polarChartData} series={polarChartData.series} type="polarArea" height={385} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PolarChart;
