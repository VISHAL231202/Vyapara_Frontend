import { Col, Row } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
import { designMeetingData } from "../../../../Data/Dashboard/Project/Project";
import DesignMeetingAvatar from "./DesignMeetingAvatar";

const DesignMeeting = () => {
  return (
    <Row className="align-items-center">
      <Col xs="2">
        <UL className="d-flex flex-column gap-4 simple-list overflow-visible">
          {designMeetingData.map((data, i) => (
            <LI key={i} className="p-0">
              <span className="font-light">{data}</span>
            </LI>
          ))}
        </UL>
      </Col>
      <DesignMeetingAvatar />
    </Row>
  );
};

export default DesignMeeting;
