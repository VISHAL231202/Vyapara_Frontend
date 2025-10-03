import { CardBody } from "reactstrap";
import { P } from "../../../../AbstractElements";
import ReactApexChart from "react-apexcharts";
import { TotalSaleBodyPropsType } from "../../../../Type/Widgets/General";

const TotalSaleBody = ({item}:TotalSaleBodyPropsType) => {
  return (
    <CardBody className="progress-card pt-0">
      <div>
        <P className="f-w-500">{item.detail}</P>
      </div>
      <div className="order-chart">
        <ReactApexChart className="chart" options={item.chart} series={item.chart.series} width={180} height={130} type="line"/>
      </div>
    </CardBody>
  );
};

export default TotalSaleBody;
