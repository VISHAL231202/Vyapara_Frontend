import { Card, CardBody, Col, Row } from "reactstrap";
import { H3, H5 } from "../../../../AbstractElements";
import { totalClients } from "../../../../Data/Dashboard/Default/Default";
import ReactApexChart from "react-apexcharts";

const TotalClients = () => {
  return (
    <Col xl="2" sm="6">
      <Row>
        {totalClients.map((item, i) => (
          <Col xs="6" sm="12" key={i}>
            <Card className="client-card card-hover">
              <CardBody>
                <Row>
                  <Col xs="6" className="custom-width-1">
                    <H3 className={`font-${item.color}`}>{item.count}</H3>
                    <H5 className="f-w-600">{item.title}</H5>
                  </Col>
                  <Col xs="6" className="custom-width-2">
                    <div className={item.class}>
                      <ReactApexChart options={item.chartData} series={item.chartData.series} height={85} type={item.chartData.chart?.type} />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default TotalClients;
