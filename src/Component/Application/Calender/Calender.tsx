import { Card, CardBody, Col, Container, Row } from "reactstrap";
import DragCalendar from "./DragCalendar/DragCalendar";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs/Breadcrumbs";
import { Apps, CalenderHeading } from "../../../utils/Constant";

const CalenderContainer = () => {
  return (
    <>
      <Breadcrumbs mainTitle={CalenderHeading} parent={Apps} />
      <Container fluid className="calendar-basic">
        <Card>
          <CardBody>
            <Row>
              <Col sm="12">
                <Row> 
                  <DragCalendar />
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Container>
    </>
  );
};

export default CalenderContainer;
