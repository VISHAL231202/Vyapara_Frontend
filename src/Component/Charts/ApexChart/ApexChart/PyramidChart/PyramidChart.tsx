import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { PyramidChartHeading } from "../../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { pyramidChartData } from "../../../../../Data/Charts/ApexChart/ApexChartData";

const PyramidChart = () => {
  return (
    <Col xl="6">
      <Card>
        <CardHeaderCommon headClass="pb-0" title={PyramidChartHeading} />
        <CardBody>
          <ReactApexChart options={pyramidChartData} series={pyramidChartData.series} type="bar" height={350} id="pyramid-chart" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PyramidChart;
