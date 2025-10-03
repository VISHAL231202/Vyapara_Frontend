import { Card, CardBody, Col, Row } from "reactstrap";
import { H4, H6 } from "../../../../AbstractElements";
import ReactApexChart from "react-apexcharts";
import { saleChartData } from "../../../../Data/Widgets/Chart/ChartsData";

const TotalSaleWidgets = () => {
  return (
    <Row>
      {saleChartData.map((data, index) => (
        <Col xl="4" md="12" className="box-col-4" key={index}>
          <Card className="o-hidden">
            <div className="chart-widget-top">
              <CardBody className="row pb-0 m-0">
                  <Col xl="9" lg="8" xs="9" className="p-0">
                    <H4 className="mb-2">{data.title}</H4>
                    <H4>{data.amount}</H4>
                    <span>{data.description}</span>
                  </Col>
                  <Col xl="3" lg="4" xs="3" className="p-0 text-end">
                    <H6 className="font-success">{data.percentage}</H6>
                  </Col>
              </CardBody>
              <div>
                <ReactApexChart
                  id={data.id}
                  options={data.chart}
                  series={data.chart.series}
                  type={data.chart.chart?.type}
                  height={200}
                />
              </div>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default TotalSaleWidgets;
