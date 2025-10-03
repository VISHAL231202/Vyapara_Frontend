import { homeEstateData } from "../../../../Data/Dashboard/Project/Project";
import { Card, CardBody, Col } from "reactstrap";
import { H6, Progressbar, SVG } from "../../../../AbstractElements";
import { Progress } from "../../../../utils/Constant";
import HomeEstateAvatars from "./HomeEstateAvatars";

const HomeEstateCard = () => {
  return (
    <>
      {homeEstateData.map((data, i) => (
        <Col xl="12" key={i}>
          <Card className="esatae-card card-hover">
            <CardBody>
              <div className="esatae-body d-flex align-items-center gap-4">
                <div className="d-flex gap-3 align-items-center">
                  <div className={`flex-shrink-0 bg-${data.color}`}>
                    <SVG iconId={data.icon} className="svg-w-24" />
                  </div>
                  <div className="flex-grow-1">
                    <H6 className="f-w-500">{data.title}</H6>
                    <span className="f-w-400 f-13">{data.course}</span>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex">
                    <H6 className="f-w-500">{Progress} </H6>
                    <span className="f-w-500 f-14">{data.percentage}</span>
                  </div>
                  <Progressbar animated striped className={`mt-2 progress-striped-${data.color}`} color={data.color} value={data.value} />
                </div>
                <HomeEstateAvatars data={data} />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default HomeEstateCard;
