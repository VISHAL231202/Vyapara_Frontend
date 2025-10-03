import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Accept, Decline, Href, Monthly, NotificationsHeading, Weekly, Yearly} from "../../../../utils/Constant";
import { Btn, H6, Image } from "../../../../AbstractElements";
import { Link } from "react-router-dom";
import { notificationsData } from "../../../../Data/Dashboard/Default/Default";
import { dynamicImage } from "../../../../Service";

const Notifications = () => {
  return (
    <Col xl="3" sm="6" className="custom-margin">
      <Card className="notification-card">
        <CardHeaderCommon title={NotificationsHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly}/>
        <CardBody className="p-0">
          {notificationsData.map((item, i) => (
            <div className={`d-flex ${item.class} gap-3`} key={i}>
              <div className="flex-shrink-0">
                {item.image && <Image className="img-40 b-r-15" src={dynamicImage(`avatar/${item.image}`)} alt="Use1" />}
                {item.name && <span className={`bg-${item.color}`}>{item.name}</span>}
              </div>
              <div className="flex-grow-1">
                <Link to={Href}>
                  <H6>{item.notification}</H6>
                </Link>
                <span>{item.time}</span>
                {item.buttons && <div className="d-flex gap-2 p-0 mt-2">
                  <Btn color="outline-dark">{Decline}</Btn>
                  <Btn color="primary">{Accept}</Btn>
                </div>}
              </div>
              {item.dot &&
                <div className="circle-dot-primary">
                  <span />
                </div>
              }
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Notifications;
