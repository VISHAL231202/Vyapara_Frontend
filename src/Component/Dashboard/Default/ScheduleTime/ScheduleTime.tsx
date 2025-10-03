import { Card, CardBody, Col } from "reactstrap";
import CardHeaderCommon from "../../../../CommonElements/CommonCardHeader/CardHeaderCommon";
import { Month, Monthly, ScheduleTimeHeading, Weekly, Year, Yearly } from "../../../../utils/Constant";
import { H5 } from "../../../../AbstractElements";
import ScheduleTimeTab from "./ScheduleTimeTab";
import { useState } from "react";
import ScheduleTimeTabContent from "./ScheduleTimeTabContent";

const ScheduleTime = () => {
  const [tabId,setTabId] = useState<string>("mon-tab")
  return (
    <Col xl="3" sm="6" className="order-1 order-xl-0">
      <Card className="schedule-card">
        <CardHeaderCommon headClass="pb-0" title={ScheduleTimeHeading} firstItem={Weekly} secondItem={Monthly} thirdItem={Yearly} />
        <CardBody className="pt-0">
          <div className="d-flex justify-content-between mb-3">
            <H5>Aug 2024</H5>
            <div className="d-flex align-items-center gap-2 monthly-time">
              <H5 className="font-light">{Month} </H5>
              <H5 className="font-light">{Year}</H5>
            </div>
          </div>
          <ScheduleTimeTab setTabId={setTabId} tabId={tabId}/>
          <ScheduleTimeTabContent tabId={tabId}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScheduleTime;
