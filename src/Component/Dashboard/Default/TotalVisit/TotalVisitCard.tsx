import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Monthly, TotalVisitHeading, Weekly, Yearly} from "../../../../utils/Constant";
import { Badges, H6, LI, SVG, UL } from "../../../../AbstractElements";
import { totalVisitCardData } from "../../../../Data/Dashboard/Default/Default";
import ReactApexChart from "react-apexcharts";
import { totalVisitCardChatData } from "../../../../Data/Dashboard/DashboardChartData";

const TotalVisitCard = () => {
  return (
    <Col xl="12" lg="5" xs="6">
      <Card className="visit-card card-hover">
        <CardHeaderCommon headClass="pb-0" title={TotalVisitHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="pb-0">
          <UL className="d-flex justify-content-xl-between justify-content-evenly simple-list flex-row">
            {totalVisitCardData.map((item, i) => (
              <LI key={i} className="p-0">
                <Badges color={`light-${item.color}`} className="b-r-0">
                  <SVG iconId={item.svgIcon} className="svg-menu me-1" />
                  {item.title}
                </Badges>
                <div className="d-block text-center mt-2">
                  <H6 className="f-w-500">{item.percentage}</H6>
                  <span className="font-light f-13">{item.amount}</span>
                </div>
              </LI>
            ))}
          </UL>
        </CardBody>
        <div className="visit-chart" >
          <ReactApexChart options={totalVisitCardChatData} series={totalVisitCardChatData.series} height={80} type={"line"} />
        </div>
      </Card>
    </Col>
  );
};

export default TotalVisitCard;
