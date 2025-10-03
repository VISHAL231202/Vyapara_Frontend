import { Card, CardBody, Col } from "reactstrap";
import CommonHeaderProject from "../CommonHeaderProject";
import { TotalClientsHeading } from "../../../../utils/Constant";
import { Image, LI, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { totalClientsData } from "../../../../Data/Dashboard/Project/Project";
import TotalClientsBtn from "./TotalClientsBtn";
import TotalClientsChart from "./TotalClientsChart";

const TotalClients = () => {
  return (
    <Col md="4">
      <Card className="client-card">
        <CommonHeaderProject title={TotalClientsHeading} number="7465" />
        <CardBody>
          <div className="d-block">
            <div className="d-flex justify-content-between align-items-center">
              <div className="team-member">
                <div className="customers d-inline-block avatar-group">
                  <UL className="flex-row simple-list">
                    {totalClientsData.map((item, i) => (
                      <LI className="d-inline-block p-0" key={i}>
                        <Image className="img-52 b-r-8" src={dynamicImage(`user/${item}`)} alt="#" />
                      </LI>
                    ))}
                    <LI className="d-inline-block p-0">
                      <span className="img-52 img-h-52 b-r-10">+4 </span>
                    </LI>
                  </UL>
                </div>
              </div>
              <TotalClientsChart />
            </div>
            <TotalClientsBtn />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalClients;
