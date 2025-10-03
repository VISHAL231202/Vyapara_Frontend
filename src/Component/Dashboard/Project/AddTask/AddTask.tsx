import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Btn, H4 } from "../../../../AbstractElements";
import { AddTaskHeading, Href, Today } from "../../../../utils/Constant";
import DesignMeeting from "./DesignMeeting";
import Calendar from "./Calendar";

const AddTask = () => {
  return (
    <Col lg="12" xl="4">
      <Card className="calendar-box">
        <CardHeader className="border-dash-bottom">
          <H4>{Today}</H4>
          <span>UI/UX designer</span>
          <div className="card-icon">
            <Btn color="primary" href={Href}>{AddTaskHeading}</Btn>
          </div>
        </CardHeader>
        <CardBody>
          <Calendar />
          <DesignMeeting />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AddTask;
