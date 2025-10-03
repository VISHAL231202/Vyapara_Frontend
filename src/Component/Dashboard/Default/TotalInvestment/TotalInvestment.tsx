import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Monthly,TotalInvestmentHeading,Weekly,Yearly} from "../../../../utils/Constant";
import ReactApexChart from "react-apexcharts";
import { totalInvestmentChart } from "../../../../Data/Dashboard/DashboardChartData";
import { H5, H6, LI, UL } from "../../../../AbstractElements";
import { totalInvestmentFooterData } from "../../../../Data/Dashboard/Default/Default";

const TotalInvestment = () => {
  return (
    <Col xl="3" md="6">
      <Card className="invest-card">
        <CardHeaderCommon title={TotalInvestmentHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="p-0">
          <div id="investment">
            <ReactApexChart options={totalInvestmentChart} series={totalInvestmentChart.series} height={237} type={"polarArea"}/>
          </div>
          <UL className="flex-row">
            {totalInvestmentFooterData.map((item, i) => (
              <LI key={i}>
                <H5>{item.title}</H5>
                <H6>$ {item.amount}</H6>
              </LI>
            ))}
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalInvestment;
